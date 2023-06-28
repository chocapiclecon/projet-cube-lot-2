import { Component } from '@angular/core';

interface Sons {
  position: number;
	name: string;
	auteur: string;
}

const SONS: Sons[] = [
	{
    position: 1,
		name: 'Dynamite',
		auteur: 'BTS'
	},
	{
    position: 2,
		name: 'Blinding Lights',
		auteur: 'The Weeknd'
	},
	{
    position: 3,
		name: 'Watermelon Sugar',
		auteur: 'Harry Styles'
	},
	{
    position: 4,
		name: 'Therefore I Am',
		auteur: 'Billie Eilish',
	},
];


@Component({
  selector: 'app-son-ressource-list',
  templateUrl: './son-ressource-list.component.html',
  styleUrls: ['./son-ressource-list.component.css']
})
export class SonRessourceListComponent {
  sons = SONS;

}
