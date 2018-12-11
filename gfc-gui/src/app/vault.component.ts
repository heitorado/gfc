import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Vault } from './vault';
import { VaultService } from './vault.service';

@Component({
  selector: 'app-root',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.css']
})
export class VaultComponent implements OnInit {
   constructor(private vaultService: VaultService) {}

   vault: Vault = new Vault();

   title = "House Vault";

   balance = this.vault.get();

   ngOnInit(): void {
     this.vaultService.getVault()
         .then(as => this.vault = as)
         .catch(erro => alert(erro));
   }
}