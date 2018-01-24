import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcouponsbypriceComponent } from './getcouponsbyprice.component';

describe('GetcouponsbypriceComponent', () => {
  let component: GetcouponsbypriceComponent;
  let fixture: ComponentFixture<GetcouponsbypriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcouponsbypriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcouponsbypriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
