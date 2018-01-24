import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcustomersComponent } from './getcustomers.component';

describe('GetcustomersComponent', () => {
  let component: GetcustomersComponent;
  let fixture: ComponentFixture<GetcustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
