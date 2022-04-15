import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleCarrosComponent } from './controle-carros.component';

describe('ControleCarrosComponent', () => {
  let component: ControleCarrosComponent;
  let fixture: ComponentFixture<ControleCarrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControleCarrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
