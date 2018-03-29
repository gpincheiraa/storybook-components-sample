import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
	selector: 'gp-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	@Input() isTransparent = false;
	public isOpened = false;
	private mobileThreshold = 767;

	constructor() { }

	ngOnInit() { }

	@HostListener('window:resize', ['$event'])
	onWindowResize(event) {
		if(this.isOpened && event.target.innerWidth > this.mobileThreshold) {
			this.isOpened = false;
		}
	}
	handleMenu() {
		return this.isOpened = !this.isOpened;
	}
}
