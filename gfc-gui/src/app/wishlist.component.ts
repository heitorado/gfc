import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Possession } from './possession';
import { PossessionsService } from './possessions.service';

@Component({
  selector: 'app-root',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
   constructor(private possessionsService: PossessionsService) {}
   
    title = "Wishlist";
    item: Possession = new Possession();
    wishlistItems: Possession[];
    currentVaultMoney : number;

    addToWishlist(item: Possession): void{
      this.possessionsService.createPossession(item)
        .then(res => {
          if(res){
            this.wishlistItems.push(res);
            this.item = new Possession();
          } else {
            // todo
          }
        })
        .catch(error => alert(error));
    }

    markAsBought(item: Possession) : void {
      // todo
    }

    getItemCompletion(p : Possession) : number{
      console.log(this.currentVaultMoney);
      var percentage = (this.currentVaultMoney/p.preco)*100;

      if(percentage > 100)
        percentage = 100;

      return percentage;
    }



   ngOnInit(): void {
      this.possessionsService.getPossessions()
         .then(fullList => this.wishlistItems = fullList)
         .catch(erro => alert(erro));      

         this.currentVaultMoney = 0.0;
   }

   //vault stub

   deposit(value: number): number {
    return this.currentVaultMoney += value;
  }

  withdraw(value: number): number {
    return this.currentVaultMoney -= value;
  }

  getBalance(): number {
    return this.currentVaultMoney
  }
}