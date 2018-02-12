import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mysvg1Component } from './mysvg-1.component';

describe('Mysvg1Component', () => {
  let component: Mysvg1Component;
  let fixture: ComponentFixture<Mysvg1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mysvg1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mysvg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
