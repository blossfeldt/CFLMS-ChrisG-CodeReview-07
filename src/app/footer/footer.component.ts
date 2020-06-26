import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
	content = `Codefactory 2020 - Chris`;
	constructor() {}

	ngOnInit(): void {}
}
