import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityControlOrdersComponent } from './quality-control-orders.component';

describe('QualityControlOrdersComponent', () => {
  let component: QualityControlOrdersComponent;
  let fixture: ComponentFixture<QualityControlOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityControlOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualityControlOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
