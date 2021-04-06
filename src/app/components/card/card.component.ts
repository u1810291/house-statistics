import { Component, OnInit } from '@angular/core';

import { Card } from '../../card';
import { PeopleService } from '../../services/card/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  heroes: Card[] | undefined;

  constructor(private peopleService: PeopleService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void {
    this.peopleService.getPeople()
      .subscribe(people => {
        return this.heroes = people
      });
  }
}
