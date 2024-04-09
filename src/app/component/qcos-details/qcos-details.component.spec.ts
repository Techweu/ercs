import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcosDetailsComponent } from './qcos-details.component';

describe('QcosDetailsComponent', () => {
  let component: QcosDetailsComponent;
  let fixture: ComponentFixture<QcosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QcosDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QcosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
