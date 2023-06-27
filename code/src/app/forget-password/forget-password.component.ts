import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  forgetPasswordForm = this.formBuilder.group({
    mail: '',
    datenaiss: '',
    mdp: '',
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}

}
