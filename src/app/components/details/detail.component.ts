import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../card';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() person: Card | undefined;

  constructor() { }

  ngOnInit() {
  }

}