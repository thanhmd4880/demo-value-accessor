import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCustomDateTimeComponent } from './app-custom-date-time.component';

describe('AppCustomDateTimeComponent', () => {
  let component: AppCustomDateTimeComponent;
  let fixture: ComponentFixture<AppCustomDateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCustomDateTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCustomDateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
