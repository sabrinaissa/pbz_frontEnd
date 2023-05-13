import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loanform1Component } from './loanform1.component';

describe('Loanform1Component', () => {
  let component: Loanform1Component;
  let fixture: ComponentFixture<Loanform1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loanform1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loanform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
