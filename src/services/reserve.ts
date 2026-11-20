import {Injectable,signal } from "@angular/core";
@Injectable({
  providedIn:'root'
})
export class reserve{
  nbRes=signal(0);
  definirN(n:number){
    this.nbRes.set(n);
  }
  ajouterRes(){
    this.nbRes.update(n=>n+1);
  }
  supprimerRes(){
    this.nbRes.update(n=>Math.max(0,n-1));
  }
}
