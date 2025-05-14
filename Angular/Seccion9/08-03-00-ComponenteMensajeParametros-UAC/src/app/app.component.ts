import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./nuevo-componente/nuevo-componente.component";
import { ComponenteEnLineaComponent } from "./componente-en-linea/componente-en-linea.component";
import { InterpolacionComponent } from "./interpolacion/interpolacion.component";
import { PadreComponent } from './padre/padre.component';
import { MostrarMensajeComponent } from "./mostrar-mensaje/mostrar-mensaje.component";
import { ReplicadorComponent } from "./replicador/replicador.component";
import { SaludarComponent } from "./saludar/saludar.component";
import { ComponenteIfComponent } from "./componente-if/componente-if.component";
import { AgregarTareaComponent } from "./agregar-tarea/agregar-tarea.component";
import { ComponenteForComponent } from "./componente-for/componente-for.component";
import { ViewChildComponent } from "./view-child/view-child.component";
import { MensajeService } from './mensaje.service';
import { ListadoUsuariosComponent } from "./listado-usuarios/listado-usuarios.component";
import { EjemploPipesComponent } from "./ejemplo-pipes/ejemplo-pipes.component";
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { NavegacionComponent } from "./navegacion/navegacion.component";

// Registramos los datos de locaclizacion para español
registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NuevoComponenteComponent, ComponenteEnLineaComponent, InterpolacionComponent, PadreComponent, MostrarMensajeComponent, ReplicadorComponent, SaludarComponent, ComponenteIfComponent, AgregarTareaComponent, ComponenteForComponent, ViewChildComponent, ListadoUsuariosComponent, EjemploPipesComponent, NavegacionComponent],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Ejemplo Pipes en Angular';

  mensaje: string;

  constructor(mensajeService: MensajeService){
    this.mensaje = mensajeService.obtenerMensaje();
  }
}
