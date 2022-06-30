import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardCheckoutComponent } from './product-card-checkout.component';

describe('ProductCardCheckoutComponent', () => {
  let component: ProductCardCheckoutComponent;
  let fixture: ComponentFixture<ProductCardCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
