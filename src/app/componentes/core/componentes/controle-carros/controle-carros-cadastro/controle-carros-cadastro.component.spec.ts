import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleCarrosCadastroComponent } from './controle-carros-cadastro.component';

describe('ControleCarrosCadastroComponent', () => {
  let component: ControleCarrosCadastroComponent;
  let fixture: ComponentFixture<ControleCarrosCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControleCarrosCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleCarrosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
