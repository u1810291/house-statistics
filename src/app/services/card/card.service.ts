import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Card } from '../../card';
import { PEOPLE } from '../../data/mock-people';
import { MessageService } from '../messages/message.service';

@Injectable({ providedIn: 'root' })
export class PeopleService {

  constructor(private messageService: MessageService) { }

  getPeople(): Observable<Card[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(PEOPLE);
  }

  getPerson(id: number): Observable<Card | undefined> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(PEOPLE.find(person => person.id === id));
  }
}
