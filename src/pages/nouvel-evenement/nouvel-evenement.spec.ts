import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NouvelEvenement } from './nouvel-evenement';

describe('NouvelEvenement', () => {
  let component: NouvelEvenement;
  let fixture: ComponentFixture<NouvelEvenement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouvelEvenement],
    }).compileComponents();

    fixture = TestBed.createComponent(NouvelEvenement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
