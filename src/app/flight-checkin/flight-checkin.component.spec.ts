import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCheckinComponent } from './flight-checkin.component';

describe('FlightCheckinComponent', () => {
  let component: FlightCheckinComponent;
  let fixture: ComponentFixture<FlightCheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightCheckinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
