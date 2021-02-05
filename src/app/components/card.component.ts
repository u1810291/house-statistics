import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { PEOPLE } from '../data/mock-people';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  people = PEOPLE;
  selectedPerson: Card | undefined;

  constructor() {
  }
  ngOnInit() {
  }
  onSelect(person: Card): void {
    this.selectedPerson = person;
  }

}
