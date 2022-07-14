import { Component } from '@angular/core';
import { Personaje } from '../personajes';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes:Personaje[] =
  [
    {
    nombre: "Vegeta",
    poder: 20000
   },
   {
    nombre: "Goku",
    poder: 25000
   },
   {
    nombre: "Krilin",
    poder: 15000
   }

 ];

 nuevo:Personaje={
  nombre:"",
  poder:0
 }


  agregar():void{
    this.personajes.push(this.nuevo);
    this.nuevo={
      nombre:"",
      poder:0
     }

  }

}
