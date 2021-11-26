import firebase from 'firebase/compat/app';
import Timestamp = firebase.firestore.Timestamp;

export interface IBlog {
  id?: string;
  titulo?: string;
  contenido?: string;
  imagen?: any;
  fileRef?: string;
  horaCreacion?: Timestamp;
  categoria?: string;
}
