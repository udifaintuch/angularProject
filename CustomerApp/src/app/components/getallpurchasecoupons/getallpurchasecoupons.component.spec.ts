import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallpurchasecouponsComponent } from './getallpurchasecoupons.component';

describe('GetallpurchasecouponsComponent', () => {
  let component: GetallpurchasecouponsComponent;
  let fixture: ComponentFixture<GetallpurchasecouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallpurchasecouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallpurchasecouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
