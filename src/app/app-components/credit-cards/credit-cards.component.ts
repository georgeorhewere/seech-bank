import { Component, OnInit } from '@angular/core';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.scss']
})
export class CreditCardsComponent implements OnInit {

  faCard= faCreditCard;
  constructor() { }


  ngOnInit(): void {
  }

}
