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
    
   value: number = 0.0;

   title = "House Vault";

   balance = this.vault.get();

   ngOnInit(): void {
     this.vaultService.getVault()
         .then(as => this.vault = as)
         .catch(erro => alert(erro));
   }

   atualizarVault(value: number): void{
        if (value > 0){
            this.vault.balance += value;
        } else {
            this.vault.balance -= value;
        }
        this.vaultService.atualizar(this.vault).then(a => this.vault = a).catch(this.tratarErro);
   }

   private tratarErro(erro: any): Promise<any>{
    console.error('Bad request to the vault service',erro);
    return Promise.reject(erro.message || erro);
  }
}