enum Suit {Hearts = 0, Diamonds, Clubs, Spades};

import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  template: `<div *ngIf = "card">{{card.suit}}: {{card.rank}}<div>`,
})
export class CardComponent{
	 @Input()
	 card: Card;
}

export class Card{
	constructor( public suit: Suit = Suit.Hearts, public rank: string= "6") {}
}

export class Cards {
	ranks:string[] = [];
	
	constructor (){
		for(let i= 2; i <10; i++){
			this.ranks = this.ranks.concat(i.toString());
		}
		this.ranks = this.ranks.concat( 'J', 'Q', 'K', 'A');
	}

	getCard(): Card {
		return new Card( Suit[(Math.random()*4).toString()], this.ranks[Math.random()*this.ranks.length]);
	}
}
