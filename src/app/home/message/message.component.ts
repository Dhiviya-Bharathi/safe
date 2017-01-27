import { Component } from '@angular/core';

@Component({
	selector: 'safe-home-message',
	templateUrl: './message.component.html',
	styleUrls: [ './message.component.css' ]
})
export class MessageComponent {
	event = {
	  	title: 'Paris Event',
	  	crewName:  'Haily Vitale',
	  	isSafe: true
  	}
}