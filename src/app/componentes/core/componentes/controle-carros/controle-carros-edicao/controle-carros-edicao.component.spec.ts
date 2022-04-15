import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleCarrosEdicaoComponent } from './controle-carros-edicao.component';

describe('ControleCarrosEdicaoComponent', () => {
  let component: ControleCarrosEdicaoComponent;
  let fixture: ComponentFixture<ControleCarrosEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControleCarrosEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleCarrosEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
