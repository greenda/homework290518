import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from '../common/services/hotels-service.service';

@Component({
  selector: 'app-social-info-panel',
  templateUrl: './social-info-panel.component.html',
  styleUrls: ['./social-info-panel.component.css']
})
export class SocialInfoPanelComponent {
  @Input() selectedHotel: IHotel;
}
