import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincingButtonComponent } from './princing-button.component';

describe('PrincingButtonComponent', () => {
  let component: PrincingButtonComponent;
  let fixture: ComponentFixture<PrincingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincingButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
