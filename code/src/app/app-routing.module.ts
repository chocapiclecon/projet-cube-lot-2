import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilModule } from './acceuil/acceuil.module';
import { acceuilComponent } from './acceuil/app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormAddUserComponent } from './form-add-user/form-add-user.component';
import { HeaderComponent } from './header/header.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LivreRessourceListComponent } from './livre-ressource-list/livre-ressource-list.component';
import { LivreRessourceAddComponent } from './livre-ressource-add/livre-ressource-add.component';
import { LivreRessourceDetailComponent } from './livre-ressource-detail/livre-ressource-detail.component';

const routes: Routes = [
  {path: 'connexion', component: ConnexionComponent},
  {path: 'form-add-user', component: FormAddUserComponent},
  {path: 'accueil', component: acceuilComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'livre-ressource-list', component: LivreRessourceListComponent},
  {path: 'livre-ressource-add', component: LivreRessourceAddComponent},
  {path: 'livre-ressource-detail', component: LivreRessourceDetailComponent},
  {path: '', component: acceuilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
