import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { back } from '../../main';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-mentionslegales',
  imports: [MatIcon, MatIconButton],
  templateUrl: './mentionslegales.html',
  styleUrl: './mentionslegales.scss',
})
export class Mentionslegales {
  protected readonly back = back;
}
