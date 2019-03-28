import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargerPage } from './larger.page';

describe('LargerPage', () => {
  let component: LargerPage;
  let fixture: ComponentFixture<LargerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
