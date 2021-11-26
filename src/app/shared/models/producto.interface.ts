import firebase from 'firebase/compat/app';
import Timestamp = firebase.firestore.Timestamp;

export interface IProducto {
  id?: string;
  nombre?: string;
  contenido?: string;
  precio?: number;
  imagen?: any;
  fileRef?: string;
  horaCreacion?: Timestamp;
  categoria?: string;
  relevancia?: boolean;
}
