import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AcumuladorComponent } from "./acumulador.component";

@NgModule({
  declarations:[
    AcumuladorComponent
  ],
  exports:[
    AcumuladorComponent
  ],
  imports:[
    CommonModule
  ]
})
export class AcumuladorModule{

}
