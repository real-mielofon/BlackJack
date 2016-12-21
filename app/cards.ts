enum Suit {Hearts = 0, Diamonds, Clubs, Spades};

import { Component, Input, OnInit  } from '@angular/core';


@Component({
  selector: 'card',
  template: `<div class="card {{card.suitColor}}" *ngIf = "card">{{card.rank}}{{card.suitText}}<div>`,
  styles: ['.Red { color: red}', '.Black { color: Black}']
})
export class CardComponent{
	 @Input()
	 card: Card;
}

export class Card{
	constructor( public suit: Suit = Suit.Hearts, public rank: string= "6") {}

	get suitText(): string {
		switch (this.suit) {
			case Suit.Hearts:
				return '♥';
			case Suit.Diamonds:
				return '♦';
			case Suit.Clubs:
				return '♣';
			case Suit.Spades:
				return '♠';
		}
	}
	get suitColor(): string {
		if(this.suit in [Suit.Hearts, Suit.Diamonds]){
			return "Red";
		}
		else {
			return "Black";
		}
	}
}

@Component({
  selector: 'cards',
  template: `
<div class="cards" *ngIf = "cards.length > 0">
            <table class="table-bordered" id="" style="">
                <tbody>
                    <tr>
                        <td *ngFor="let card of cards">{{card}}</td>
                    </tr>
                </tbody>
            </table>
</div>

  <div class="card {{card.suitColor}}" *ngIf = "card">{{card.rank}}{{card.suitText}}<div>`,
  styles: ['.Red { color: red}', '.Black { color: Black}']
})
export class CardsComponent {
	@Input()
	cards: Array<Card>;
}


export class CardDeck  implements OnInit{
	ranks:string[] = [];
	
	constructor (){
	}
    ngOnInit() {
		for(let i= 2; i <10; i++){
			this.ranks = this.ranks.concat(i.toString());
		}
		this.ranks = this.ranks.concat( 'J', 'Q', 'K', 'A');
  	}

	getCard(): Card {
		return new Card( Suit[(Math.random()*4).toString()], this.ranks[Math.random()*this.ranks.length]);
	}
}
