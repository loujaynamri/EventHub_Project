import { BadgeCategorie } from './../badge-categorie/badge-categorie';
import { DatePipe } from '@angular/common';
import { Evenement } from './../../models/evenement';
import { Component,computed,input,Input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EtatPlaces } from '../../pipes/etat-places';

@Component({
  imports: [DatePipe,RouterLink,BadgeCategorie],
  selector: 'app-carte-evenement',
  styleUrl: './carte-evenement.css',
  templateUrl: './carte-evenement.html',
})
export class CarteEvenement {
  readonly evenement = input.required<Evenement>();
  readonly estFavori = input(false);

  /** Output : informe le parent qu'on veut ajouter/retirer cet événement des favoris. */
  readonly favori = output<Evenement>();

  protected readonly termine = computed(() => estTermine(this.evenement()));
  protected readonly restantes = computed(() => placesRestantes(this.evenement()));
}
