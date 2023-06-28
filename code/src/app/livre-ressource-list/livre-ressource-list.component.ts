import { Component } from '@angular/core';

interface Livres {
  position: number;
	name: string;
	auteur: string;
}

const LIVRES: Livres[] = [
	{
    position: 1,
		name: 'Harry Potter',
		auteur: 'Joanne Rowling'
	},
	{
    position: 2,
		name: 'Le Seigneur des Anneaux ',
		auteur: 'John Ronald Reuel Tolkien'
	},
	{
    position: 3,
		name: 'Le Petit Prince',
		auteur: 'Antoine de Saint Exupéry'
	},
	{
    position: 4,
		name: 'Alice au pays des merveilles',
		auteur: 'Lewis Carroll',
	},
];

@Component({
  selector: 'app-livre-ressource-list',
  templateUrl: './livre-ressource-list.component.html',
  styleUrls: ['./livre-ressource-list.component.css'],
})
export class LivreRessourceListComponent {
  allLivres: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  livres = LIVRES;
}
