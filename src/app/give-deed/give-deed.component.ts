import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Deed } from '../deed';
import { DeedService } from '../deed.service';

@Component({
  selector: 'app-give-deed',
  templateUrl: './give-deed.component.html',
  styleUrls: ['./give-deed.component.css']
})
export class GiveDeedComponent implements OnInit {
  deeds: Deed[];

  constructor(private deedService: DeedService) {}

  ngOnInit() {
    this.getAllDeeds();
    this.deedService.deeds$.subscribe(deed => {
      console.log('subscribe', deed);
      // console.log('this deeds', this.deeds);
      this.deeds.push(deed);
    });
  }

  getAllDeeds(): void {
    this.deedService.getAllDeeds().subscribe(deeds => {
      console.log('from sub', deeds);
      this.deeds = deeds;
    });
  }

  addDeed(newDeed: { id; description }): void {
    if (newDeed) {
      this.deedService.addDeed({ description: newDeed });
    }
  }
}
