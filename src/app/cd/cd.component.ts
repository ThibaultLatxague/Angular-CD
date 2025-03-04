import { Component, Input, OnInit } from '@angular/core';
import { CD } from '../models/cd.model';
import { CdsService } from '../services/cds.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cd',
  standalone: false,
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CDComponent {
  @Input() cd!: CD;
  theCd!: CD;
  idCd!: string;

  constructor(private cdService: CdsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idCd = this.route.snapshot.params['id'];
    console.log(this.idCd);
    if(this.idCd !== undefined) {
      console.log(this.cdService.getCDById(+this.idCd).subscribe(cd => {this.theCd = cd;}));
      this.cdService.getCDById(+this.idCd).subscribe(cd => {this.theCd = cd;});
    } else {
      this.theCd = this.cd;
    }
  }
  
  onAddCD(): void {
    this.theCd.quantite++;
  }
}
