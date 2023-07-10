import { Component } from '@angular/core';
import { Item } from './interfaces/item.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
    title = 'proyectoAngular'; 
    // Resto del código del componente

  items: Item[] = [
    { nombre: 'Producto 1', costo: '10' },
    { nombre: 'Producto 2', costo: '20' },
    { nombre: 'Producto 3', costo: '30' }
  ];
  mostrarLista = true;


  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }
}


