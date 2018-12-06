import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   constructor(private userService: UserService) {}

   user: User = new User();
   users: User[];
   cpfduplicado: boolean = false;

   criarUser(a: User): void {
     this.userService.criar(a)
        .then(ab => {
           if (ab) {
              this.users.push(ab);
              this.user = new User();
           } else {
              this.cpfduplicado = true;
           }
        })
        .catch(erro => alert(erro));
   }

   onMove(): void {
      this.cpfduplicado = false;
   }

   ngOnInit(): void {
     this.userService.getUsers()
         .then(as => this.users = as)
         .catch(erro => alert(erro));
   }
}