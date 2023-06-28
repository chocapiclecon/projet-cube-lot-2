import { Component } from '@angular/core';

interface Images {
  position: number;
	name: string;
	auteur: string;
}

const IMAGES: Images[] = [
	{
    position: 1,
		name: 'Image 1',
		auteur: 'Auteur 1'
	},
	{
    position: 2,
		name: 'Image 2',
		auteur: 'Auteur 2'
	},
	{
    position: 3,
		name: 'Image 3',
		auteur: 'Auteur 3'
	},
	{
    position: 4,
		name: 'Image 4',
		auteur: 'Auteur 4'
	},
];

@Component({
  selector: 'app-image-ressource-list',
  templateUrl: './image-ressource-list.component.html',
  styleUrls: ['./image-ressource-list.component.css']
})
export class ImageRessourceListComponent {
  images = IMAGES;
}
