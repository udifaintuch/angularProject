import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcouponsbyidComponent } from './getcouponsbyid.component';

describe('GetcouponsbyidComponent', () => {
  let component: GetcouponsbyidComponent;
  let fixture: ComponentFixture<GetcouponsbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcouponsbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcouponsbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
