export type Categorie = 'atelier' | 'conference' | 'competition' | 'sortie';
export interface Evenement {
  id: number; titre: string;
  description: string;
  categorie: Categorie;
  club: string;
  date: Date;
  lieu: string;
  capacite: number;
  placesReservees: number;
  gratuit: boolean;
}
