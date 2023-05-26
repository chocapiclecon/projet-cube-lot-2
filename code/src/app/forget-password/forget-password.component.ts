import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  forgetPasswordForm = this.formBuilder.group({
    userName: '',
    dateNaissance: '',
    mdp: '',
    confirmMdp: '',
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}

}
