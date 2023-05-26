import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  loginForm = this.formBuilder.group({
    mail: '',
    mdp: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.loginForm.value);
    // this.router.navigate(['/acceuil']);
    this.loginForm.reset();
  }

}
