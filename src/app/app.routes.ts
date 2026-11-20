import { ListeEvenements } from "../pages/liste-evenements/liste-evenements";
import { Routes } from '@angular/router';
export const routes: Routes =
[
  {
    path: '',redirectTo:'evenements',pathMatch:'full'
  },
  {
    path:'evenements',component:ListeEvenements
  },
  {
    path:'evenements/:id',loadComponent:()=>
    import('../pages/detail-evenement/detail-evenement').then(
      m=>m.DetailEvenement
    )
  },
  {
    path:'evenements/:id/reservation',loadComponent:()=>
    import('../pages/reservation/reservation').then(
      m=>m.Reservation
    )
  },
  {
    path:'mes-reservations',loadComponent:()=>import('../pages/mes-reservation/mes-reservation').then(
    m=>m.MesReservation
  )
  },
  {
    path:'nouvel-evenement',loadComponent:()=>import('../pages/nouvel-evenement/nouvel-evenement').then(
    m=>m.NouvelEvenement
  )
  },
  {
    path:'connexion',loadComponent:()=>import('../pages/connexion/connexion').then(
    m=>m.Connexion
  )
  },
  {
    path:'**',loadComponent:()=>import('../pages/introuvable/introuvable').then(
    m=>m.Introuvable
  )
  }
];
