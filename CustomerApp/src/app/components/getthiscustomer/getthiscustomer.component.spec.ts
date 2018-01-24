import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetthiscustomerComponent } from './getthiscustomer.component';

describe('GetthiscustomerComponent', () => {
  let component: GetthiscustomerComponent;
  let fixture: ComponentFixture<GetthiscustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetthiscustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetthiscustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
