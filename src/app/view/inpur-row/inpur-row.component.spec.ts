import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InpurRowComponent } from './inpur-row.component';

describe('InpurRowComponent', () => {
  let component: InpurRowComponent;
  let fixture: ComponentFixture<InpurRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InpurRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InpurRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
