import { evenements } from '../../donnees/evenements';
import { Component } from '@angular/core';
import { CarteEvenement } from '../../composants/carte-evenement/carte-evenement';
@Component({
  imports: [CarteEvenement],
  selector: 'app-liste-evenements',
  styleUrl: './liste-evenements.css',
  templateUrl: './liste-evenements.html',
  standalone:true
})
export class ListeEvenements {
  event=evenements;
}
