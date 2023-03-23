import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  loginForm = this.formBuilder.group({
    userName: '',
    mdp: ''
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.loginForm.value);
    this.loginForm.reset();
  }

}
