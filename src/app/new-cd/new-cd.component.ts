import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { CD } from '../models/cd.model';

@Component({
  selector: 'app-new-cd',
  standalone: false,
  templateUrl: './new-cd.component.html',
  styleUrl: './new-cd.component.scss'
})
export class NewCDComponent implements OnInit {
  
  formulaire!: FormGroup;
  currentCD!: CD;

  constructor(private formBuilder: FormBuilder) {  }
  
  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      title: [null],
      author: [null],
      thumbnail: [null],
      dateDeSortie: [null],
      quantite: [null],
      price: [null],
    })
  }

  formSoumis(): void {

  }
}
