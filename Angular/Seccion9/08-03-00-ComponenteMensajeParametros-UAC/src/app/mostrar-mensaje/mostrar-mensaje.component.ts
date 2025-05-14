import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-mensaje',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  styleUrl: './mostrar-mensaje.component.css'
})
export class MostrarMensajeComponent {
  mensaje: string = '';

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.mensaje = this.route.snapshot.queryParams['mensaje'];
  }

  mostrarMensaje() {
    this.mensaje = '¡Hola, has hecho click en el botón!'
  }

  resetearMensaje() {
    // Reiniciar el mensaje
    this.mensaje = '';
  }

}
