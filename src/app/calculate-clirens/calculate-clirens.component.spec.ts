import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateClirensComponent } from './calculate-clirens.component';

describe('CalculateClirensComponent', () => {
  let component: CalculateClirensComponent;
  let fixture: ComponentFixture<CalculateClirensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateClirensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateClirensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
