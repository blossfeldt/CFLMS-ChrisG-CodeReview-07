import { Component, OnInit } from '@angular/core';
import { services } from '../our_services';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
	services = services;
	constructor() {}

	ngOnInit(): void {
		document.body.classList.add('bg-img');
		document.body.classList.add('h-100');
	}
}
