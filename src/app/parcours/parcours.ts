import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { back } from '../../main';

@Component({
  selector: 'app-parcours',
  imports: [MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './parcours.html',
  styleUrl: './parcours.scss',
})
export class Parcours {
  protected readonly location = location;
  protected readonly back = back;
}
