/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lesson003Component } from './lesson003.component';

describe('Lesson003Component', () => {
  let component: Lesson003Component;
  let fixture: ComponentFixture<Lesson003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
