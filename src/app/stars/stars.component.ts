import { Component } from '@angular/core';
import { Star } from '../star';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent {
  star: Star = {
    id: 1,
    name: 'The Sun'
  };
}
