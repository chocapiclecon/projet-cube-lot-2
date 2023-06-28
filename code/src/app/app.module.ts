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
import { LivreRessourceListComponent } from './livre-ressource-list/livre-ressource-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LivreRessourceAddComponent } from './livre-ressource-add/livre-ressource-add.component';
import {MatTableModule} from '@angular/material/table';
import { LivreRessourceDetailComponent } from './livre-ressource-detail/livre-ressource-detail.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

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
