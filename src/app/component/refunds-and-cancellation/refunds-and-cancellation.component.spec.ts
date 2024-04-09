import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundsAndCancellationComponent } from './refunds-and-cancellation.component';

describe('RefundsAndCancellationComponent', () => {
  let component: RefundsAndCancellationComponent;
  let fixture: ComponentFixture<RefundsAndCancellationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefundsAndCancellationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefundsAndCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
