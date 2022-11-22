import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithButtonComponent } from './input-with-button.component';

describe('InputWithButtonComponent', () => {
  let component: InputWithButtonComponent;
  let fixture: ComponentFixture<InputWithButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWithButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputWithButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
