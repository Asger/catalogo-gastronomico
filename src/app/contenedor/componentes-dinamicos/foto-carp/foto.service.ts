import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { IFile } from '../../../shared/models/file.interface';
import { IFoto } from '../../../shared/models/foto.interface';
import firebase from 'firebase/compat/app';
import Timestamp = firebase.firestore.Timestamp;

@Injectable({
  providedIn: 'root',
})
export class FotoService {
  private fotosColeccion!: AngularFirestoreCollection<IFoto>;
  private filePath: any;
  private downloadURL!: Observable<string>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    // Creo la referencia de la colección en Firebase
    this.fotosColeccion = this.afs.collection<IFoto>(`Fotos`, (ref) =>
      ref.orderBy('horaCreacion', 'desc')
    );
  }

  // Obtengo las fotos de Firebase en forma de un arreglo
  public getTodasFotos(): Observable<IFoto[]> {
    return this.fotosColeccion.snapshotChanges().pipe(
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

  // Obtengo una Foto en especifico, basado en el id que recibe como parametro
  public getUnaFoto(id: string) {
    return this.fotosColeccion.doc(id).valueChanges();
  }

  // Elimino una Foto de firebase, basado en el id del Foto que recibe como parametro
  public async eliminarFotoById(foto: IFoto) {
    return await this.fotosColeccion.doc(foto.id).delete();
  }

  /* 
    Este método me permite actualizar una foto especifico, pero antes de eso, evalúa
    si el administrador cambio la imagen, si fue así, subira primero la imagen y despúes 
    actualizara la foto 
  */
  public editarFotoById(foto: IFoto, nuevaImagen?: IFile) {
    if (nuevaImagen) {
      this.subirImagen(foto, nuevaImagen);
    } else {
      this.fotosColeccion
        .doc(foto.id)
        .update(foto)
        .then(() => {
          console.log('Actualizada');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  /* 
    Este método sera el que llame, cuando quiera crear una nueva foto, para que suba primero la imagen 
    y luego cree la foto con su correspondiente imagen 
  */
  public preCrearYActualizarFoto(foto: IFoto, imagen: IFile): void {
    this.subirImagen(foto, imagen);
  }

  // Este método creara la foto o la actualizara, dependiendo si el administrador eligió otra imagen
  private async guardarFoto(foto: IFoto) {
    const fotoObj = {
      titulo: foto.titulo,
      imagen: this.downloadURL,
      fileRef: this.filePath,
      horaCreacion: foto.horaCreacion,
      categoria: foto.categoria,
    };

    if (foto.id) {
      try {
        await this.fotosColeccion.doc(foto.id).update(fotoObj);
        console.log('Actualizada');
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await this.fotosColeccion.add(fotoObj);
      } catch (error) {
        console.log(error);
      }
    }
  }

  // Este método perimite subir la imagen a Firebase y luego llama al método guardarFoto()
  private subirImagen(foto: IFoto, imagen: IFile) {
    this.filePath = `imagenes-fotos/${imagen.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, imagen);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((urlImagen) => {
            this.downloadURL = urlImagen;
            //llamo al metodo guardarFoto
            this.guardarFoto(foto);
          });
        })
      )
      .subscribe();
  }
}
