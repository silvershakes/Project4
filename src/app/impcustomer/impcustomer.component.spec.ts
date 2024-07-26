import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpcustomerComponent } from './impcustomer.component';

describe('ImpcustomerComponent', () => {
  let component: ImpcustomerComponent;
  let fixture: ComponentFixture<ImpcustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpcustomerComponent]
    });
    fixture = TestBed.createComponent(ImpcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
