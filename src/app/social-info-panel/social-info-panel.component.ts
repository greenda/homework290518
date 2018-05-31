import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../hotels';

@Component({
  selector: 'app-social-info-panel',
  templateUrl: './social-info-panel.component.html',
  styleUrls: ['./social-info-panel.component.css']
})
export class SocialInfoPanelComponent implements OnInit {
  @Input() selectedHotel: Hotel;

  constructor() { }

  ngOnInit() {
  }

}
