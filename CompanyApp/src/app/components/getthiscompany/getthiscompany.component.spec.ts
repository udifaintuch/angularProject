import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetthiscompanyComponent } from './getthiscompany.component';

describe('GetthiscompanyComponent', () => {
  let component: GetthiscompanyComponent;
  let fixture: ComponentFixture<GetthiscompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetthiscompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetthiscompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
