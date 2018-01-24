import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcouponsbytypeComponent } from './getcouponsbytype.component';

describe('GetcouponsbytypeComponent', () => {
  let component: GetcouponsbytypeComponent;
  let fixture: ComponentFixture<GetcouponsbytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcouponsbytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcouponsbytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
