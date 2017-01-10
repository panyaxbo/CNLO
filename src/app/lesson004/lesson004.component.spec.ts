/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lesson004Component } from './lesson004.component';

describe('Lesson004Component', () => {
  let component: Lesson004Component;
  let fixture: ComponentFixture<Lesson004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
