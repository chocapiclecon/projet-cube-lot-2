import { Component } from '@angular/core';

interface Videos {
  position: number;
	name: string;
	auteur: string;
}

const VIDEOS: Videos[] = [
	{
    position: 1,
		name: '	Baby Shark',
		auteur: 'Pinkfong'
	},
	{
    position: 2,
		name: 'Despacito',
		auteur: 'Luis Fonsi feat. Daddy Yankee'
	},
	{
    position: 3,
		name: 'Johny Johny Yes Papa: The Best Song for Children LooLoo Kids',
		auteur: 'LooLoo Kids'
	},
	{
    position: 4,
		name: 'Bath Song',
		auteur: 'CoComelon & Kids Songs',
	},
];

@Component({
  selector: 'app-video-ressource-list',
  templateUrl: './video-ressource-list.component.html',
  styleUrls: ['./video-ressource-list.component.css']
})
export class VideoRessourceListComponent {
  videos = VIDEOS;

}
