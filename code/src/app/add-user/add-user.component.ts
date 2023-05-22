import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  addForm = this.formBuilder.group({
    nom: '',
    prenom: '',
    dateNaissance: '',
    mail: '',
    userName: '',
    mdp: '',
    confirmMdp: '',
    acceptCondition: false,
    acceptMail: false,
  });

  ngOnInit(){}
  constructor(
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.addForm.value);
    this.addForm.reset();
  }
}
