import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

export interface ressource {
  id? : number
  titre?: string,
  description? : string
  id_ressource? : string
  id_category?: string,
  image?: string,
  partage?: string,

}
interface typeRessources {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-livre-ressource-add',
  templateUrl: './livre-ressource-add.component.html',
  styleUrls: ['./livre-ressource-add.component.css']
})
export class LivreRessourceAddComponent {

  addForm = this.formBuilder.group({
    titre: '',
    description: '',
    id_ressource: '',
    id_category: '',
    image: '',
    partage:''
  });
  typeRessource: typeRessources[] = [
    {value: 1, viewValue: 'Livres'},
    {value: 2, viewValue: 'Sons'},
    {value: 3, viewValue: 'Vidéos'},
    {value: 4, viewValue: 'Images'},
  ];
  categoryRessource: typeRessources[] = [
    {value: 1, viewValue: 'Lecture'},
    {value: 2, viewValue: 'Sport'},
    {value: 3, viewValue: 'Cinéma'},
    {value: 4, viewValue: 'Voyage'},
  ];
  partages: typeRessources[] = [
    {value: 1, viewValue: 'Public'},
    {value: 2, viewValue: 'Ami'},
    {value: 3, viewValue: 'Prive'},
  ];

  ressources: Array<ressource> = []
  ressource: ressource = { }
  addRessource(form:any): void {
    this.ressources.push({ ... this.ressource })
    // this.personnes = [];
    form.reset();
    console.log("Cette ressource",this.ressources);
  }
  ngOnInit() {}
  constructor(
    private formBuilder: FormBuilder,
  ) {}

}
