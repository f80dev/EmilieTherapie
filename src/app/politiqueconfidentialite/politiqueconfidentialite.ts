import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { back } from '../../main';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-politiqueconfidentialite',
  imports: [MatIcon, MatIconButton],
  templateUrl: './politiqueconfidentialite.html',
  styleUrl: './politiqueconfidentialite.scss',
})
export class Politiqueconfidentialite {
  protected readonly back = back;
}
