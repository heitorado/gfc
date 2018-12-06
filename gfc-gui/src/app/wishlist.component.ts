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

   ngOnInit(): void {
     this.possessionsService.getPossessions()
         .then(fullList => this.wishlistItems = fullList)
         .catch(erro => alert(erro));
   }
}