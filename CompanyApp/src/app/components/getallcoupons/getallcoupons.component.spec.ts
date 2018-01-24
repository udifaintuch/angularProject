import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallcouponsComponent } from './getallcoupons.component';

describe('GetallcouponsComponent', () => {
  let component: GetallcouponsComponent;
  let fixture: ComponentFixture<GetallcouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallcouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallcouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
