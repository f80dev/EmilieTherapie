import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatExpansionPanel, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';

@Component({
  selector: 'app-tarifs',
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
  ],
  templateUrl: './tarifs.html',
  styleUrl: './tarifs.scss',
})
export class Tarifs {}
