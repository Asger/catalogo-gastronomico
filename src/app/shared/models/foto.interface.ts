import firebase from 'firebase/compat/app';
import Timestamp = firebase.firestore.Timestamp;

export interface IFoto {
  id?: string;
  titulo?: string;
  imagen?: any;
  fileRef?: string;
  horaCreacion?: Timestamp;
  categoria?: string;
}
