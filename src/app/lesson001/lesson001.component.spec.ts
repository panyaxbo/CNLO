/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lesson001Component } from './lesson001.component';

describe('Lesson001Component', () => {
  let component: Lesson001Component;
  let fixture: ComponentFixture<Lesson001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
