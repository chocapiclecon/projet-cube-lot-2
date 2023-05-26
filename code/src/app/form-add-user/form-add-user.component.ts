import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styleUrls: ['./form-add-user.component.css']
})
export class FormAddUserComponent implements OnInit {

  addForm = this.formBuilder.group({
    nom: '',
    prenom: '',
    datenaiss: '',
    code_postal: '',
    ville:'',
    mail: '',
    pseudo: '',
    mdp: '',
    acceptCondition: false,
    acceptMail: false,
  });
  
  users: Array<User> = []
  user: User = { }
  addUser(form:any): void {
    this.users.push({ ... this.user })
    // this.personnes = [];
    form.reset();
    console.log("Cette personne",this.users);
  }
  ngOnInit() {}
  constructor(
    private formBuilder: FormBuilder,
  ) {}

}
