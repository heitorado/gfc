import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Bills } from './bills';
import { BillsService } from './bills.service';

@Component({
  selector: 'app-root',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
   constructor(private BillsService: BillsService) {}

   bill: Bills = new Bills();
   bills: Bills[];
   title = "Common Expenses"

   criarGasto(a: Bills): void {
     this.BillsService.criar(a)
        .then(ab => {
              this.bills.push(ab);
              this.bill = new Bills();
           
        })
        .catch(erro => alert(erro));
   }

   ngOnInit(): void {
     this.BillsService.getBills()
         .then(as => this.bills = as)
         .catch(erro => alert(erro));
   }
}