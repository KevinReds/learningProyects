import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';
import { DatosService } from './datos.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  productos: {[llave:string]: Producto}={};
  // Observable para notificar cambios
  productosActualizados= new Subject<{[llave: string]: Producto}>();

  constructor(private datosServicio: DatosService){
  }

  listarProductos(): Observable<{[llave:string]: Producto}>{
    return this.datosServicio.listarProductos();
  }

  guardarProducto(producto: Producto, llave: string | null=null) {
    if(llave===null){
      //caso agregar
      this.datosServicio.agregarProducto(producto).subscribe(()=>{
        this.refrescarProductos();
      });
    } else {
      this.datosServicio.modificarProducto(producto, llave).subscribe(()=>{
        this.refrescarProductos();
      });
    }
    
  }

  refrescarProductos(){
    this.listarProductos().subscribe((productos: {[llave:string]: Producto})=>{
      this.setProductos(productos);
    });
  }

  setProductos(productos: {[llave:string]: Producto}){
    this.productos = productos;
    this.productosActualizados.next(this.productos); //permite emitir la actualizacion de la lista
  }

  getProductoByLlave(llave: string): Producto| undefined{
    return this.productos[llave];
  }

  eliminarProducto(llave: string) {
    this.datosServicio.eliminarProducto(llave).subscribe(()=>{
      this.refrescarProductos();
    })
  }

}
