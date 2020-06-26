import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
	company = 'Travel Corp';
	constructor(private cartService: CartService) {}

	ngOnInit(): void {}
	display() {
		let numerOfItems = this.cartService.numberOfBookings();
		if (numerOfItems > 0) {
			return numerOfItems;
		} else {
			return ``;
		}
	}
}
