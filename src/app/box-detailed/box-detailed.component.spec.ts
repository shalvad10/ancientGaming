import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxDetailedComponent } from './box-detailed.component';

describe('BoxDetailedComponent', () => {
  let component: BoxDetailedComponent;
  let fixture: ComponentFixture<BoxDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxDetailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
