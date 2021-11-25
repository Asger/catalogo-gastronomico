import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { IFile } from '../../../shared/models/file.interface';
import { ICarrusel } from '../../../shared/models/carrusel.interface';
import firebase from 'firebase/compat/app';
import Timestamp = firebase.firestore.Timestamp;

@Injectable({
  providedIn: 'root',
})
export class CarruselService {
  private carruselColeccion!: AngularFirestoreCollection<ICarrusel>;
  private filePath: any;
  private downloadURL!: Observable<string>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    // Creo la referencia de la colección en Firebase
    this.carruselColeccion = this.afs.collection<ICarrusel>(`carrusel`, (ref) =>
      ref.orderBy('horaCreacion', 'desc')
    );
  }

  // Obtengo el contenido del carrusel de Firebase en forma de un arreglo
  public getCarrusel(): Observable<ICarrusel[]> {
    return this.carruselColeccion.snapshotChanges().pipe(
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

  // Obtengo un slider en especifico, basado en el id que recibe como parametro
  public getUnSlider(id: string) {
    return this.carruselColeccion.doc(id).valueChanges();
  }

  // Elimino un slider de firebase, basado en el id del slider que recibe como parametro
  public async eliminarSliderById(carrusel: ICarrusel) {
    return await this.carruselColeccion.doc(carrusel.id).delete();
  }

  /* 
    Este método me permite actualizar un slider especifico, pero antes de eso, evalúa
    si el administrador cambio la imagen, si fue así, subira primero la imagen y despúes 
    actualizara el slider 
  */
  public editarSliderById(carrusel: ICarrusel, nuevaImagen?: IFile) {
    if (nuevaImagen) {
      this.subirImagen(carrusel, nuevaImagen);
    } else {
      this.carruselColeccion
        .doc(carrusel.id)
        .update(carrusel)
        .then(() => {
          console.log('Actualizado');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  /* 
    Este método sera el que llame, cuando quiera crear un nuevo slider, para que suba primero la imagen 
    y luego cree el slider con su correspondiente imagen 
  */
  public preCrearYActualizarSlider(carrusel: ICarrusel, imagen: IFile): void {
    this.subirImagen(carrusel, imagen);
  }

  // Este método creara el slider o lo actualizara, dependiendo si el administrador eligió otra imagen
  private async guardarSlider(carrusel: ICarrusel) {
    const sliderObj = {
      titulo: carrusel.titulo,
      contenido: carrusel.contenido,
      imagen: this.downloadURL,
      fileRef: this.filePath,
      horaCreacion: carrusel.horaCreacion,
    };

    if (carrusel.id) {
      try {
        await this.carruselColeccion.doc(carrusel.id).update(sliderObj);
        console.log('Actualizado');
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await this.carruselColeccion.add(sliderObj);
      } catch (error) {
        console.log(error);
      }
    }
  }

  // Este método perimite subir la imagen a Firebase y luego llama al método guardarSlider()
  private subirImagen(carrusel: ICarrusel, imagen: IFile) {
    this.filePath = `imagenes-carrusel/${imagen.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, imagen);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((urlImagen) => {
            this.downloadURL = urlImagen;
            //llamo al metodo guardarSlider
            this.guardarSlider(carrusel);
          });
        })
      )
      .subscribe();
  }
}
