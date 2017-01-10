/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lesson005Component } from './lesson005.component';

describe('Lesson005Component', () => {
  let component: Lesson005Component;
  let fixture: ComponentFixture<Lesson005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
