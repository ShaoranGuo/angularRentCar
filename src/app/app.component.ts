import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
	<h1>{{title}}</h1>
	<nav>
    <ul>
   	<li><a routerLink="/cars">Rent a car</a></li>
   	<li><a routerLink="/getbackcars">Get back a car</a></li>
    </ul>
	</nav>
   	<router-outlet></router-outlet><br>
	`
})

export class AppComponent {

  title = 'Car Rental Service';

}
