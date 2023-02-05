import { Component } from '@angular/core';
import { Star } from '../star';
import { STARS } from '../mock-stars';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent {
  imageSource?: string;
  stars = STARS;
  selectedStar?: Star;
  onSelect(star: Star): void {
  this.selectedStar = star;
}
}
