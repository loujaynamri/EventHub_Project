import { DatePipe } from '@angular/common';
import { Evenement } from './../../models/evenement';
import { Component,Input } from '@angular/core';

@Component({
  imports: [DatePipe],
  selector: 'app-carte-evenement',
  styleUrl: './carte-evenement.css',
  templateUrl: './carte-evenement.html',
})
export class CarteEvenement {
   @Input() evenement!: Evenement;
}
