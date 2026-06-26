import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tarifs',
  imports: [MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './tarifs.html',
  styleUrl: './tarifs.scss',
})
export class Tarifs {}
