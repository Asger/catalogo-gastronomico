import { NgModule } from '@angular/core';

//Importación de los modulos necesarios para firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';

// Autenticación firebase
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [
    {
      provide: BUCKET,
      useValue: 'gs://web-gastronomica-catalogo.appspot.com/',
    },
  ],
  exports: [
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
})
export class FirebaseModule {}
