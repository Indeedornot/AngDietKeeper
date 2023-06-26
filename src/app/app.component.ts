import { Component } from '@angular/core';
import { Card, SampleCards } from '@core/models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngDietKeeper';
  cards: Card[] = SampleCards;
  budget = 100;
  budgetLeft = this.budget;
  currencySymbol = '$'; // make a global constant

  calories = 2000;
  caloriesLeft = this.calories;
}
