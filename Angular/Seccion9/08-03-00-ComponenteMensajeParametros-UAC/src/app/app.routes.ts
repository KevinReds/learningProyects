import { Routes } from '@angular/router';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { MostrarMensajeComponent } from './mostrar-mensaje/mostrar-mensaje.component';

export const routes: Routes = [
    {path:'', component: ListadoUsuariosComponent}, //localhost:4200/
    {path:'mostrar-mensaje', component: MostrarMensajeComponent},
];
