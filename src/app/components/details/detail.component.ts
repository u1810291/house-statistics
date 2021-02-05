import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Card } from '../../card';
import { PeopleService } from '../../services/card/card.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  person: Card | undefined;

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private location: Location
  ) { }
  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    // tslint:disable-next-line: no-non-null-assertion
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.peopleService.getPerson(id)
      .subscribe(person => this.person = person);
  }

  goBack(): void {
    this.location.back();
  }
}
