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
  protected readonly session = inject(Session);
  protected readonly reservations = inject(Reservations);
  private readonly router = inject(Router);

  protected deconnecter(): void {
    this.session.deconnecter();
    this.router.navigateByUrl('/evenements');
  }
}
