import { evenements } from './../donnees/evenements';
import { PiedPage } from './../composants/pied-page/pied-page';
import { EnTete } from './../composants/en-tete/en-tete';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  imports: [EnTete,PiedPage,RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
[x: string]: any;
  protected readonly title = signal('EventHub');
    event = evenements;
}
