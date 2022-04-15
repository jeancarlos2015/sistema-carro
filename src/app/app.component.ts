import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sistema-carro';
  items: MenuItem[];
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      {
        label: 'Início',
        icon: 'pi pi-fw pi-home',
        routerLink:['/']
      },
      {
        label: 'Carros',
        icon: 'pi pi-fw pi-list',
        routerLink:['carros']
      },
     
    ];
  }
}
