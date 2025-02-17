import { Component, Input } from '@angular/core';
import { CD } from '../models/cd.model';

@Component({
  selector: 'app-cd',
  standalone: false,
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CDComponent {
  @Input() cd!: CD;

  onAddCD() {
    this.cd.quantite++;
  }
}
