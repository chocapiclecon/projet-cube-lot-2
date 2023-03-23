import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormAddUserComponent } from './form-add-user/form-add-user.component';

const routes: Routes = [
  {path: 'connexion', component: ConnexionComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'form-add-user', component: FormAddUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
