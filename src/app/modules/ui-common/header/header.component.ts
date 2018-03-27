import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public videoUrls;
  @Input() public title = 'Custom Cinemagraph Productions';

  constructor() { }

  ngOnInit() {
    
  }
}
