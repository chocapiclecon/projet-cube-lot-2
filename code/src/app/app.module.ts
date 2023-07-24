import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormAddUserComponent } from './form-add-user/form-add-user.component';
import { HeaderComponent } from './header/header.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LivreRessourceListComponent } from './livre-ressource/livre-ressource-list/livre-ressource-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LivreRessourceAddComponent } from './livre-ressource/livre-ressource-add/livre-ressource-add.component';
import {MatTableModule} from '@angular/material/table';
import { LivreRessourceDetailComponent } from './livre-ressource/livre-ressource-detail/livre-ressource-detail.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SonRessourceListComponent } from './son-ressource/son-ressource-list/son-ressource-list.component';
import { SonRessourceDetailComponent } from './son-ressource/son-ressource-detail/son-ressource-detail.component';
import { SonRessourceAddComponent } from './son-ressource/son-ressource-add/son-ressource-add.component';
import { VideoRessourceListComponent } from './video-ressource/video-ressource-list/video-ressource-list.component';
import { VideoRessourceDetailComponent } from './video-ressource/video-ressource-detail/video-ressource-detail.component';
import { VideoRessourceAddComponent } from './video-ressource/video-ressource-add/video-ressource-add.component';
import { ImageRessourceListComponent } from './image-ressource/image-ressource-list/image-ressource-list.component';
import { ImageRessourceDetailComponent } from './image-ressource/image-ressource-detail/image-ressource-detail.component';
import { ImageRessourceAddComponent } from './image-ressource/image-ressource-add/image-ressource-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConnexionComponent,
    FormAddUserComponent,
    ForgetPasswordComponent,
    LivreRessourceListComponent,
    LivreRessourceAddComponent,
    LivreRessourceDetailComponent,
    SonRessourceListComponent,
    SonRessourceDetailComponent,
    SonRessourceAddComponent,
    VideoRessourceListComponent,
    VideoRessourceDetailComponent,
    VideoRessourceAddComponent,
    ImageRessourceListComponent,
    ImageRessourceDetailComponent,
    ImageRessourceAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
