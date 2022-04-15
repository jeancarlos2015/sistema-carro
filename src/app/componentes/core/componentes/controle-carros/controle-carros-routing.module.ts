import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControleCarrosEdicaoComponent } from './controle-carros-edicao/controle-carros-edicao.component';
import { ControleCarrosComponent } from './controle-carros.component';

const routes: Routes = [
  {
    path: '',
    component: ControleCarrosComponent
  },
  {
    path: 'edicao/:id',
    component: ControleCarrosEdicaoComponent
  },
  {
    path: 'cadastro',
    component: ControleCarrosEdicaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControleCarrosRoutingModule { }
