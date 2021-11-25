import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { IFile } from '../../../shared/models/file.interface';
import { IBlog } from '../../../shared/models/blog.interface';
import firebase from 'firebase/compat/app';
import Timestamp = firebase.firestore.Timestamp;

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogsColeccion!: AngularFirestoreCollection<IBlog>;
  private filePath: any;
  private downloadURL!: Observable<string>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    // Creo la referencia de la colección en Firebase
    this.blogsColeccion = this.afs.collection<IBlog>(`blogs`, (ref) =>
      ref.orderBy('horaCreacion', 'desc')
    );
  }

  // Obtengo los blogs de Firebase en forma de un arreglo
  public getTodosBlogs(): Observable<IBlog[]> {
    return this.blogsColeccion.snapshotChanges().pipe(
      map((acciones) =>
        acciones.map((a) => {
          const data = a.payload.doc.data() as any;
          Object.keys(data)
            .filter((key) => data[key] instanceof Timestamp)
            .forEach((key) => (data[key] = data[key].toDate()));
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  // Obtengo un blog en especifico, basado en el id que recibe como parametro
  public getUnBlog(id: string) {
    return this.blogsColeccion.doc(id).valueChanges();
  }

  // Elimino un blog de firebase, basado en el id del blog que recibe como parametro
  public async eliminarBlogById(blog: IBlog) {
    return await this.blogsColeccion.doc(blog.id).delete();
  }

  /* 
    Este método me permite actualizar un blog especifico, pero antes de eso, evalúa
    si el administrador cambio la imagen, si fue así, subira primero la imagen y despúes 
    actualizara el blog 
  */
  public editarBlogById(blog: IBlog, nuevaImagen?: IFile) {
    if (nuevaImagen) {
      this.subirImagen(blog, nuevaImagen);
    } else {
      this.blogsColeccion
        .doc(blog.id)
        .update(blog)
        .then(() => {
          console.log('Actualizado');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  /* 
    Este método sera el que llame, cuando quiera crear un nuevo blog, para que suba primero la imagen 
    y luego cree el blog con su correspondiente imagen 
  */
  public preCrearYActualizarBlog(blog: IBlog, imagen: IFile): void {
    this.subirImagen(blog, imagen);
  }

  // Este método creara el blog o lo actualizara, dependiendo si el administrador eligió otra imagen
  private async guardarBlog(blog: IBlog) {
    const blogObj = {
      titulo: blog.titulo,
      contenido: blog.contenido,
      imagen: this.downloadURL,
      fileRef: this.filePath,
      horaCreacion: blog.horaCreacion,
      categoria: blog.categoria,
    };

    if (blog.id) {
      try {
        await this.blogsColeccion.doc(blog.id).update(blogObj);
        console.log('Actualizado');
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await this.blogsColeccion.add(blogObj);
      } catch (error) {
        console.log(error);
      }
    }
  }

  // Este método perimite subir la imagen a Firebase y luego llama al método guardarBlog()
  private subirImagen(blog: IBlog, imagen: IFile) {
    this.filePath = `imagenes-blogs/${imagen.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, imagen);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((urlImagen) => {
            this.downloadURL = urlImagen;
            //llamo al metodo guardarBlog
            this.guardarBlog(blog);
          });
        })
      )
      .subscribe();
  }
}
