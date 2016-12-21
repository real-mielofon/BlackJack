import { Component } from '@angular/core';
import { CardComponent, CardsComponent, Card, CardDeck} from './cards';

@Component({
  selector: 'BlackJack',
  template: `
  <h1>Крупье</h1> 
    <cards [cards]=croupierCards> </cards>
  <h1>Игрок</h1> 
    <cards [cards]=gamerCars ds> </cards>`
    ,
})


export class AppComponent  { 
	cardDeck: CardDeck;

	croupierCards: Array<Card>;
	gamerCards: Array<Card>;

	constructor(){
		this.cardDeck = new CardDeck();

		this.croupierCards.push(this.cardDeck.getCard());

		this.gamerCards.push(this.cardDeck.getCard());
		this.gamerCards.push(this.cardDeck.getCard());
	}
}
