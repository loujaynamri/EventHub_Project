import { evenements } from './../donnees/evenements';
import { PiedPage } from './../composants/pied-page/pied-page';
import { EnTete } from './../composants/en-tete/en-tete';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarteEvenement } from '../composants/carte-evenement/carte-evenement';
import { Evenement } from '../models/evenement';
@Component({
  imports: [EnTete,PiedPage,CarteEvenement,RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
[x: string]: any;
  protected readonly title = signal('EventHub');
    event = evenements;
}
