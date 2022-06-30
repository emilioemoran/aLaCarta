import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePlatoComponent } from './detalle-plato.component';

describe('DetallePlatoComponent', () => {
  let component: DetallePlatoComponent;
  let fixture: ComponentFixture<DetallePlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePlatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
