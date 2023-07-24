import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilModule } from './acceuil/acceuil.module';
import { acceuilComponent } from './acceuil/app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormAddUserComponent } from './form-add-user/form-add-user.component';
import { HeaderComponent } from './header/header.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LivreRessourceListComponent } from './livre-ressource/livre-ressource-list/livre-ressource-list.component';
import { LivreRessourceAddComponent } from './livre-ressource/livre-ressource-add/livre-ressource-add.component';
import { LivreRessourceDetailComponent } from './livre-ressource/livre-ressource-detail/livre-ressource-detail.component';
import { SonRessourceListComponent } from './son-ressource/son-ressource-list/son-ressource-list.component';
import { SonRessourceAddComponent } from './son-ressource/son-ressource-add/son-ressource-add.component';
import { SonRessourceDetailComponent } from './son-ressource/son-ressource-detail/son-ressource-detail.component';
import { VideoRessourceListComponent } from './video-ressource/video-ressource-list/video-ressource-list.component';
import { VideoRessourceAddComponent } from './video-ressource/video-ressource-add/video-ressource-add.component';
import { VideoRessourceDetailComponent } from './video-ressource/video-ressource-detail/video-ressource-detail.component';
import { ImageRessourceListComponent } from './image-ressource/image-ressource-list/image-ressource-list.component';
import { ImageRessourceAddComponent } from './image-ressource/image-ressource-add/image-ressource-add.component';
import { ImageRessourceDetailComponent } from './image-ressource/image-ressource-detail/image-ressource-detail.component';

const routes: Routes = [
  {path: 'connexion', component: ConnexionComponent},
  {path: 'form-add-user', component: FormAddUserComponent},
  {path: 'accueil', component: acceuilComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'livre-ressource-list', component: LivreRessourceListComponent},
  {path: 'livre-ressource-add', component: LivreRessourceAddComponent},
  {path: 'livre-ressource-detail', component: LivreRessourceDetailComponent},
  {path: 'son-ressource-list', component: SonRessourceListComponent},
  {path: 'son-ressource-add', component: SonRessourceAddComponent},
  {path: 'son-ressource-detail', component: SonRessourceDetailComponent},
  {path: 'video-ressource-list', component: VideoRessourceListComponent},
  {path: 'video-ressource-add', component: VideoRessourceAddComponent},
  {path: 'video-ressource-detail', component: VideoRessourceDetailComponent},
  {path: 'image-ressource-list', component: ImageRessourceListComponent},
  {path: 'image-ressource-add', component: ImageRessourceAddComponent},
  {path: 'image-ressource-detail', component: ImageRessourceDetailComponent},
  {path: '', component: acceuilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
