import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Deed } from '../deed';
import { DeedService } from '../deed.service';

import {
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  Direction,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';

@Component({
  selector: 'app-get-deed',
  templateUrl: './get-deed.component.html',
  styleUrls: ['./get-deed.component.css']
})
export class GetDeedComponent implements OnInit {

  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  cards: Array<any>;
  stackConfig: StackConfig;

  deeds: Deed[];

  constructor(
    private route: ActivatedRoute,
    private deedService: DeedService,
    private location: Location
  ) {
    this.stackConfig = {
      allowedDirections: [
        Direction.LEFT,
        Direction.DOWN
      ],
      throwOutConfidence: (offsetX: number, offsetY: number, targetElement: HTMLElement) => {
        // you would put ur logic based on offset & targetelement to determine
        // what is your throwout confidence
        const xConfidence = Math.min(Math.abs(offsetX) / targetElement.offsetWidth, 1);
        const yConfidence = Math.min(Math.abs(offsetY) / targetElement.offsetHeight, 1);

        return Math.max(xConfidence, yConfidence);
      },
      minThrowOutDistance: 900    // default value is 400
    };

    this.cards = [
      { name: 'clubs', symbol: '♣' },
      { name: 'diamonds', symbol: '♦' },
      { name: 'spades', symbol: '♠' }
    ];
  }

  onThrowOut($event) {
    console.log('throwing out with this $event: ', $event)
  }


  ngOnInit() {
    this.getAllDeeds();
  }



  getAllDeeds(): void {
    this.deedService.getAllDeeds().subscribe(deeds => (this.deeds = deeds));
  }

  goBack(): void {
    this.location.back();
  }
}
