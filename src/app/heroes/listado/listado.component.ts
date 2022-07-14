import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

heroes:string[]=['Spiderman','Ironman','Thor','Hulk','Capitan America','Antman'];
heroeBorrado:string | undefined;
heroesborrados: string[]=[];


borrarHeroe():void{
  //this.heroes.pop() borra el ultimo elemento
  this.heroeBorrado= this.heroes.shift();//borra el primer elemento
  this.heroesborrados.push( String(this.heroeBorrado) );
}

//tarea
/*
Crear un array de heroes borrados y mostrarlos en
tiempo real al borrar cada heroe
*/

}
