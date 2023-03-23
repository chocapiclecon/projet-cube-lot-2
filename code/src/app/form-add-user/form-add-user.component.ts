import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styleUrls: ['./form-add-user.component.css']
})
export class FormAddUserComponent implements OnInit {


  users: Array<User> = []
  user: User = { }
  addUser(form:any): void {
    this.users.push({ ... this.user })
    // this.personnes = [];
    form.reset();
    console.log("Cette personne",this.users);
  }
  constructor() { }
  ngOnInit() { }

}
