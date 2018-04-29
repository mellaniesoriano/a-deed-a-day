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
  deeds = [{id:1, description:"test1"}, {id:2, description:"test2"}];

  constructor(private deedService: DeedService) {}

  ngOnInit() {
    console.log('this.deeds on init', this.deeds)
    this.deedService.deeds$.subscribe(deeds => {
      console.log('subscribe', deeds);
      this.deeds = deeds
    });
  }

  addDeed(desc): void {
    console.log('desc', desc)
    this.deeds.push({id: 1, description: desc})
    this.deedService.addDeed(this.deeds);
  }
}
