import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { travel_array } from '../travels';

@Component({
	selector: 'app-travels',
	templateUrl: './travels.component.html',
	styleUrls: ['./travels.component.sass'],
})
export class TravelsComponent implements OnInit {
	travel_regions = travel_array;
	constructor(private cartService: CartService) {}

	addToCart(product) {
		// window.alert('Your product has been added to the cart!');
		this.cartService.addToCart(product);
	}
	ngOnInit(): void {
		document.body.classList.remove('bg-img');
	}
}
