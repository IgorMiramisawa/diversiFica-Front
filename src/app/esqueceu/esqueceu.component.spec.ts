import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsqueceuComponent } from './esqueceu.component';

describe('EsqueceuComponent', () => {
  let component: EsqueceuComponent;
  let fixture: ComponentFixture<EsqueceuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsqueceuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsqueceuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
