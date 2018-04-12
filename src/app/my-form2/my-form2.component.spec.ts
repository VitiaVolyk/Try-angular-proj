import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyForm2Component } from './my-form2.component';

describe('MyForm2Component', () => {
  let component: MyForm2Component;
  let fixture: ComponentFixture<MyForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
