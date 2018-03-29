import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
	selector: 'gp-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	@ViewChild('navbar') navbar: ElementRef;
	@Input() isTransparent = false;
	public isOpened = false;
	private mobileThreshold = 767;
	private isTransparentCancelled = true;

	constructor() { }

	ngOnInit() { }

	@HostListener('window:resize', ['$event'])
	onWindowResize(event) {
		if(this.isOpened && event.target.innerWidth > this.mobileThreshold) {
			this.isOpened = false;
		}
	}
	@HostListener('window:scroll', ['$event'])
	onWindowScroll(event) {
		if(event.target.documentElement.scrollTop > this.navbar.nativeElement.offsetHeight){	
			this.isTransparentCancelled = false;
		} else {
			this.isTransparentCancelled = true;
		}
	}
	handleMenu() {
		return this.isOpened = !this.isOpened;
	}
}
