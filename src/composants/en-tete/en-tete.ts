import { reserve } from './../../services/reserve';
import { Component ,inject} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { auth } from '../../services/auth';
@Component({
  imports: [RouterLink,RouterLinkActive],
  selector: 'app-en-tete',
  styleUrl: './en-tete.css',
  templateUrl: './en-tete.html',
  standalone:true
})
export class EnTete {
  auth=inject(auth);
  reserve=inject(reserve);
  router=inject(Router);
  deconnexion() {
    this.auth.deconnecter();
    this.router.navigate(['/connexion']);
  }
}
