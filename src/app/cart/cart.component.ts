import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.sass'],
})
export class CartComponent implements OnInit {
	bookings;
	constructor(private cartService: CartService) {}

	deleteBooking(index) {
		this.bookings.splice(index, 1);
	}
	calculateTotal() {
		let sum = 0;
		for (let bookings of this.bookings) {
			sum += bookings.price;
		}
		let text = 'Your cart is empty';
		if (sum > 0) {
			text = `Your total is: ${sum} €`;
		}
		if (sum > 200) {
			text = `Your total with a discount of 10% is: ${sum * 0.9} €`;
		}
		if (sum > 500) {
			text = `Your total with a discount of 20% is: ${sum * 0.8} €`;
		}
		return text;
	}

	// onSubmit(customerData) {
	// 	// Process checkout data here
	// 	if (this.bookings.length > 0) {
	// 		console.warn('Your order has been submitted', customerData);

	// 		this.bookings = this.cartService.clearCart();
	// 		this.checkoutForm.reset();
	// 	} else {
	// 		console.warn('Your cart is empty.');
	// 	}
	// }
	ngOnInit(): void {
		document.body.classList.remove('bg-img');
		this.bookings = this.cartService.getbookings();
	}
}
