import { Injectable,signal,computed } from "@angular/core";
import { Utilisateur } from "../models/utilisateur";
interface Compte {
  identifiant: string;
  motDePasse: string;
  nom: string;
  role: 'etudiant' | 'organisateur';
}
@Injectable({
  providedIn:'root'
})
export class auth {
  private c :Compte[]=[
    {
      identifiant: 'etudiant@iset.tn',
      motDePasse: 'etudiant123',
      nom: 'Étudiant',
      role: 'etudiant'
    },
    {
       identifiant: 'club@iset.tn',
      motDePasse: 'club123',
      nom: 'Club ISET',
      role: 'organisateur'
    }
  ]
  //verifier utilisateur est connecté
   utilisateur = signal<Utilisateur | null>(null);
  //verifier si un organisateur
  estOrganisateur = computed(() =>
    this.utilisateur()?.role === 'organisateur'
  );
   connecter(identifiant: string, motDePasse: string): boolean {
     const compte = this.c.find(c =>
      c.identifiant === identifiant &&
      c.motDePasse === motDePasse
    );
     if (compte) {
      this.utilisateur.set({
      email: compte.identifiant,
      nom: compte.nom,
      role: compte.role
});
      return true;
    }
    return false;
  }

   deconnecter() {
    this.utilisateur.set(null);
  }
}
