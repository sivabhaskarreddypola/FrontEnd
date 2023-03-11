/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PropertycardComponent } from './propertycard.component';

describe('PropertycardComponent', () => {
  let component: PropertycardComponent;
  let fixture: ComponentFixture<PropertycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
