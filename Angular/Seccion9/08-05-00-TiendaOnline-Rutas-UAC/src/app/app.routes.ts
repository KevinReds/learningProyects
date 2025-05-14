import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { formatCurrency } from '@angular/common';
import { FormControl } from '@angular/forms';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path:'', component: ListadoProductosComponent}, //localhost:4200/
    {path:'listado', component: ListadoProductosComponent},
    {path:'agregar', component: FormularioComponent},
    {path:'editar/:id', component: FormularioComponent },
    {path:'**', component: ErrorComponent}

];
