import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaDeleteComponent } from './vaga-delete.component';

describe('VagaDeleteComponent', () => {
  let component: VagaDeleteComponent;
  let fixture: ComponentFixture<VagaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagaDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VagaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
