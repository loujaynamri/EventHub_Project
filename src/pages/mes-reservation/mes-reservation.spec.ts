import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MesReservation } from './mes-reservation';

describe('MesReservation', () => {
  let component: MesReservation;
  let fixture: ComponentFixture<MesReservation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesReservation],
    }).compileComponents();

    fixture = TestBed.createComponent(MesReservation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
