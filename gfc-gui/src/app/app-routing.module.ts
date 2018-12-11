import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { VaultComponent } from './vault.component';


const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },

  {
    path: 'vault',
    component: VaultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
