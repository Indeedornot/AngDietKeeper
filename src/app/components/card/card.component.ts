import { Component, Input } from '@angular/core';
import { Card } from '@core/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  card!: Card;
}
