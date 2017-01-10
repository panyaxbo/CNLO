/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lesson006Component } from './lesson006.component';

describe('Lesson006Component', () => {
  let component: Lesson006Component;
  let fixture: ComponentFixture<Lesson006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
