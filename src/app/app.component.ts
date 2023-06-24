import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'AngDietKeeper';
	cardAmount = 12;
	budget = 100;
	budgetLeft = this.budget;
	currencySymbol = '$';

	calories = 2000;
	caloriesLeft = this.calories;
}
