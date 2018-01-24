import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcompaniesComponent } from './getcompanies.component';

describe('GetcompaniesComponent', () => {
  let component: GetcompaniesComponent;
  let fixture: ComponentFixture<GetcompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
