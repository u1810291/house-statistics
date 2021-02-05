import { Component, OnInit } from '@angular/core';

import { Card } from '../../card';
import { PeopleService } from '../../services/card/card.service';
import { MessageService } from '../../services/messages/message.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  selectedPerson: Card | undefined;

  people: Card[] | undefined;

  constructor(private peopleService: PeopleService, private messageService: MessageService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getPeople();
  }

  onSelect(person: Card): void {
    this.selectedPerson = person;
    this.messageService.add(`CardComponent: Selected hero id=${person.id}`);
  }

  getPeople(): void {
    this.peopleService.getPeople()
      .subscribe(people => this.people = people);
  }
}
