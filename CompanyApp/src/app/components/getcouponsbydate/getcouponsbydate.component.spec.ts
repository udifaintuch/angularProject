import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcouponsbydateComponent } from './getcouponsbydate.component';

describe('GetcouponsbydateComponent', () => {
  let component: GetcouponsbydateComponent;
  let fixture: ComponentFixture<GetcouponsbydateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcouponsbydateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcouponsbydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
