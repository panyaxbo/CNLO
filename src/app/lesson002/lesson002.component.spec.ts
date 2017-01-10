/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lesson002Component } from './lesson002.component';

describe('Lesson002Component', () => {
  let component: Lesson002Component;
  let fixture: ComponentFixture<Lesson002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
