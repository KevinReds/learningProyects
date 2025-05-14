import { Component, ViewChild } from '@angular/core';
import { HijoComponent } from "./hijo/hijo.component";

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

  @ViewChild(HijoComponent) componenteHijo!: HijoComponent;

  cambiarMensajeHijo() {
    this.componenteHijo.cambiarMensaje('Mensaje actualizado desde el componente Padre');
  }
}
