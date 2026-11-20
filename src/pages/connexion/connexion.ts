import { auth } from './../../services/auth';
import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  imports: [FormsModule],
  selector: 'app-connexion',
  styleUrl: './connexion.css',
  templateUrl: './connexion.html',
  standalone:true
})
export class Connexion {
  auth=inject(auth);
  router=inject(Router);
  identifiant = '';
  motDePasse = '';
  erreur = '';
  seConnecter() {
    const resultat = this.auth.connecter(
      this.identifiant,
      this.motDePasse
    );
    if (resultat) {
      this.router.navigate(['/evenements']);
    } else {
      this.erreur = 'Identifiant ou mot de passe incorrect !';
    }

  }
}
