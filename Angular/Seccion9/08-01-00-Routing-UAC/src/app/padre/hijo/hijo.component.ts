import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  mensaje: string = 'Mensaje desde el componente hijo';

  cambiarMensaje(nuevoMensaje: string){
    this.mensaje = nuevoMensaje;
  }
}
