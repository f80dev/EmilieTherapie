import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.html',
  styleUrl: './vertical-card.scss',
})
export class VerticalCard {
  @Input() image: string = '';
  @Input() imagePosition: 'left' | 'right' = 'right';
  @Input() imageHeight: string = '400px';
}
