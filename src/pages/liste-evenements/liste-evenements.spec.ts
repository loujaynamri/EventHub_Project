import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeEvenements } from './liste-evenements';

describe('ListeEvenements', () => {
  let component: ListeEvenements;
  let fixture: ComponentFixture<ListeEvenements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeEvenements],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeEvenements);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
