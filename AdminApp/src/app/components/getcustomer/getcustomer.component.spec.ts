import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcustomerComponent } from './getcustomer.component';

describe('GetcustomerComponent', () => {
  let component: GetcustomerComponent;
  let fixture: ComponentFixture<GetcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
