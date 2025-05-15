import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {Auth, getAuth} from 'firebase/auth';
import {Firestore, getFirestore} from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseConfig = {
    apiKey: "AIzaSyD261YKqFtXhupPESJRXvewZNpZOI0alAg",
    authDomain: "tienda-online-67c81.firebaseapp.com",
    databaseURL: "https://tienda-online-67c81-default-rtdb.firebaseio.com",
    projectId: "tienda-online-67c81",
    storageBucket: "tienda-online-67c81.firebasestorage.app",
    messagingSenderId: "425359546008",
    appId: "1:425359546008:web:fcf1206925d7d2026d62ed"
  };

  public auth: Auth;
  public firebase: Firestore;

  constructor() { 
    const app = initializeApp(this.firebaseConfig);
    this.auth= getAuth(app);
    this.firebase = getFirestore(app);
  }
}
