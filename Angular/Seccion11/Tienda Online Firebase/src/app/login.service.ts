import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string | null = null;

  constructor(
    private router: Router,
    private firebaseService: FirebaseService,
  ) { }

  login(email: string, password:string){
    const auth= this.firebaseService.auth;
    signInWithEmailAndPassword(auth, email, password).then(
      ()=>{
        auth.currentUser?.getIdToken().then((token)=>{
          this.token = token;
          this.router.navigate(['/']);
        })
      }) .catch((error)=>{
        console.log('error al iniciarsesion: ', error);
      })
  }

  getIdToken(){
    return this.token;
  }

  isAutenticado(){
    return this.token != null;
  }

  logout(){
    const auth = this.firebaseService.auth;
    auth.signOut().then(()=>{
      this.token=null;
      this.router.navigate(['login'])
    })
    .catch((error)=> console.log('Error logout: ', error));
  }
}
