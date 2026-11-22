import { Component, input } from '@angular/core';
import { Categorie } from '../../models/evenement';
@Component({
  imports: [],
  selector: 'app-badge-categorie',
  styleUrl: './badge-categorie.css',
  templateUrl: './badge-categorie.html',
})
export class BadgeCategorie {
  readonly categorie = input.required<Categorie>();
}
