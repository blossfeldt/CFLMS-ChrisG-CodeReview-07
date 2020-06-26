import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class CartService {
	bookings = [];
	constructor() {}

	addToCart(product) {
		this.bookings.push(product);
	}

	numberOfBookings() {
		return this.bookings.length;
	}

	getbookings() {
		return this.bookings;
	}

	clearCart() {
		this.bookings = [];
		return this.bookings;
	}
}
