import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdbarcustComponent } from './sdbarcust.component';

describe('SdbarcustComponent', () => {
  let component: SdbarcustComponent;
  let fixture: ComponentFixture<SdbarcustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdbarcustComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdbarcustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
