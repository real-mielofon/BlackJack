import { Component } from '@angular/core';
import { CardComponent, Card, Cards } from './cards';

@Component({
  selector: 'BlackJack',
  template: `<h1>{{name}}</h1> {{currentCard.suit}} {{currentCard.rank}}  <card [card] = "currentCard"> </card>`,
})


export class AppComponent  { 
	name = 'Black Jack'; 
	cards: Cards;
	currentCard: Card;

	constructor(){
		this.cards = new Cards();
		this.currentCard = this.cards.getCard();
	}
}
