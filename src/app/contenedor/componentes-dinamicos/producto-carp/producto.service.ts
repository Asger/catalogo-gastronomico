import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { IFile } from '../../../shared/models/file.interface';
import { IProducto } from '../../../shared/models/producto.interface';
import firebase from 'firebase/compat/app';
import Timestamp = firebase.firestore.Timestamp;

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private productosColeccion!: AngularFirestoreCollection<IProducto>;
  private filePath: any;
  private downloadURL!: Observable<string>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    // Creo la referencia de la colección en Firebase
    this.productosColeccion = this.afs.collection<IProducto>(
      `productos`,
      (ref) => ref.orderBy('horaCreacion', 'desc')
    );
  }

  // Obtengo los productos de Firebase en forma de un arreglo
  public getTodosProductos(): Observable<IProducto[]> {
    return this.productosColeccion.snapshotChanges().pipe(
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

  // Obtengo un producto en especifico, basado en el id que recibe como parametro
  public getUnProducto(id: string) {
    return this.productosColeccion.doc(id).valueChanges();
  }

  // Elimino un producto de firebase, basado en el id del producto que recibe como parametro
  public async eliminarProductoById(producto: IProducto) {
    return await this.productosColeccion.doc(producto.id).delete();
  }

  /* 
    Este método me permite actualizar un producto especifico, pero antes de eso, evalúa
    si el administrador cambio la imagen, si fue así, subira primero la imagen y despúes 
    actualizara el producto 
  */
  public editarProductoById(producto: IProducto, nuevaImagen?: IFile) {
    if (nuevaImagen) {
      this.subirImagen(producto, nuevaImagen);
    } else {
      this.productosColeccion
        .doc(producto.id)
        .update(producto)
        .then(() => {
          console.log('Actualizado');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  /* 
    Este método sera el que llame, cuando quiera crear un nuevo producto, para que suba primero la imagen 
    y luego cree el producto con su correspondiente imagen 
  */
  public preCrearYActualizarProducto(producto: IProducto, imagen: IFile): void {
    this.subirImagen(producto, imagen);
  }

  // Este método creara el producto o lo actualizara, dependiendo si el administrador eligió otra imagen
  private async guardarProducto(producto: IProducto) {
    const productoObj = {
      nombre: producto.nombre,
      contenido: producto.contenido,
      precio: producto.precio,
      imagen: this.downloadURL,
      fileRef: this.filePath,
      horaCreacion: producto.horaCreacion,
      categoria: producto.categoria,
      relevancia: producto.relevancia,
    };

    if (producto.id) {
      try {
        await this.productosColeccion.doc(producto.id).update(productoObj);
        console.log('Actualizado');
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await this.productosColeccion.add(productoObj);
      } catch (error) {
        console.log(error);
      }
    }
  }

  // Este método perimite subir la imagen a Firebase y luego llama al método guardarProducto()
  private subirImagen(producto: IProducto, imagen: IFile) {
    this.filePath = `imagenes-productos/${imagen.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, imagen);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((urlImagen) => {
            this.downloadURL = urlImagen;
            //llamo al metodo agregarProducto
            this.guardarProducto(producto);
          });
        })
      )
      .subscribe();
  }
}
