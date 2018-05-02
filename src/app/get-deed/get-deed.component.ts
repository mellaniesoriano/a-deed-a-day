import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Deed } from '../models/Deed';
import { DeedService } from '../services/deed.service';

import {
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  Direction,
  SwingStackComponent,
  SwingCardComponent
} from 'angular2-swing';

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
      allowedDirections: [Direction.LEFT, Direction.RIGHT],
      throwOutConfidence: (
        offsetX: number,
        offsetY: number,
        targetElement: HTMLElement
      ) => {
        return Math.min(Math.abs(offsetX) / (targetElement.offsetWidth / 2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: d => {
        return 800;
      }
    };
  }

  onThrowOut($event) {
    console.log('throwing out with this $event: ', $event);
  }

  ngOnInit() {
    this.getAllDeeds();
  }

  getAllDeeds(): void {
    this.deedService.getAllDeeds().subscribe(deeds => {
      return (this.deeds = deeds);
    });
  }

  goBack(): void {
    this.location.back();
  }

  onItemMove(element, x, y, r) {
    let color = '';
    const abs = Math.abs(x);
    const min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
    const hexCode = this.decimalToHex(min, 2);

    if (x < 0) {
      color = '#FF' + hexCode + hexCode;
    } else if (x === 0) {
      color = '#FFF';
    } else {
      color = '#' + hexCode + 'FF' + hexCode;
    }

    element.style.background = color;
    element.style[
      'transform'
    ] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }

  decimalToHex(d, padding) {
    let hex = Number(d).toString(16);
    padding =
      typeof padding === 'undefined' || padding === null
        ? (padding = 2)
        : padding;

    while (hex.length < padding) {
      hex = '0' + hex;
    }

    return hex;
  }
}
