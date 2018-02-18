import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'video-poster',
  templateUrl: './video-poster.component.html',
  styleUrls: ['./video-poster.component.scss']
})
export class VideoPosterComponent implements OnInit {
  private hostUrl = 'https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/portfolio/clients';
  private baseUrl = `${this.hostUrl}/jaegermeister/Cinemagraph_plain/1920x1080`;
  
  @Input()
  public videoUrls = {
    poster: `${this.baseUrl}/cinemagraph.jpg`,
    mp4: `${this.baseUrl}/cinemagraph.mp4`,
    webm: `${this.baseUrl}/cinemagraph.webm`,
  }
  @Input() public title = 'Custom Cinemagraph Productions';
  @Input() public subtitle = 'Exclusive Content for Businesses';
  @Input() public showAuthorInfo = true;

  constructor() { }

  ngOnInit() {

  }
}
