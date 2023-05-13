import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loanform2Component } from './loanform2.component';

describe('Loanform2Component', () => {
  let component: Loanform2Component;
  let fixture: ComponentFixture<Loanform2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loanform2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loanform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
