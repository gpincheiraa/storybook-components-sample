import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'video-poster',
	templateUrl: './video-poster.component.html',
	styleUrls: ['./video-poster.component.scss']
})
export class VideoPosterComponent implements OnInit {
	/* Example URL
	https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/artistarea
	/Preparing Pumpkin Dish_91aab030-43b3-4b1f-805e-2e1fe37a36d6/Cinemagraph_watermark_purchasepage
	/2_large_files/cinemagraph.jpg
	*/
	public videoUrls;
	@Input() public title = 'Custom Cinemagraph Productions';
	@Input() public subtitle = 'Exclusive Content for Businesses';
	@Input() public showAuthorInfo = true;
	@Input() public isWatermarked = false;

	private baseUrl;
	private itemIdentifier;
	private accessFolder;
	private cinemagraphSize;
	private cinemagraphBaseUrl;

	constructor() { }

	ngOnInit() {
	this.baseUrl = {
		artist: 'https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/artistarea',
		client: 'https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/portfolio/clients'
	};
	this.itemIdentifier = `Preparing Pumpkin Dish_91aab030-43b3-4b1f-805e-2e1fe37a36d6`;
	this.accessFolder = {
		public: 'Cinemagraph_plain',
		watermark: 'Cinemagraph_watermark_purchasepage',
	};
	this.cinemagraphSize = {
		thumbnail: '',
		medium: '2_medium-sized_files',
		watermark_large: '2_large_files',
		large: '3_large_files'
	};
	this.cinemagraphBaseUrl = this.urlBuilder();
	this.videoUrls = {
		poster: `${this.cinemagraphBaseUrl}/cinemagraph.jpg`,
		mp4: `${this.cinemagraphBaseUrl}/cinemagraph.mp4`,
		webm: `${this.cinemagraphBaseUrl}/cinemagraph.webm`,
	};
	}
	urlBuilder() {
		const urlAccess = this.isWatermarked ? this.accessFolder.watermark : this.accessFolder.public;
		const size = this.isWatermarked ? this.cinemagraphSize.watermark_large : this.cinemagraphSize.large;
		return `${this.baseUrl.artist}/${this.itemIdentifier}/${urlAccess}/${size}`;
	}
}
