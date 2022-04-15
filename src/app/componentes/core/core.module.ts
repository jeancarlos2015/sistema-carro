import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ControleCarrosModule } from './componentes/controle-carros/controle-carros.module';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
