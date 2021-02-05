import { Component, OnInit } from '@angular/core';
import { Card } from '../../card';
import { PeopleService } from '../../services/card/card.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  people: Card[] = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void {
    this.peopleService.getPeople()
      .subscribe(people => this.people = people.slice(1, 5));
  }
}