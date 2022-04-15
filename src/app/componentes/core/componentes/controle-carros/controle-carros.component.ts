import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controle-carros',
  templateUrl: './controle-carros.component.html',
  styleUrls: ['./controle-carros.component.scss']
})
export class ControleCarrosComponent implements OnInit {
  selectedProducts;
  Delete;
  products = [];
  productDialog;
  statuses = [];
  product;
  submitted;
  constructor() { }

  ngOnInit(): void {
  }

  openNew(){

  }

  deleteSelectedProducts() {

  }

  editProduct(product){

  }

  deleteProduct(product){

  }

  hideDialog() {

  }

  saveProduct() {

  }

  filterGlobal($event, modMatch) {

  }
}
