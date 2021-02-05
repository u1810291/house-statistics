import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Card } from '../../card';
import { PEOPLE } from '../../data/mock-people';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {

  constructor(private messageService: MessageService) { }

  getPeople(): Observable<Card[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('PeopleService: fetched heroes');
    return of(PEOPLE);
  }
}
