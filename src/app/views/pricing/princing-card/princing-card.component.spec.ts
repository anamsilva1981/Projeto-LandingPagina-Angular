import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincingCardComponent } from './princing-card.component';

describe('PrincingCardComponent', () => {
  let component: PrincingCardComponent;
  let fixture: ComponentFixture<PrincingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
