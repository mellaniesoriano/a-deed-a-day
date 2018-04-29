import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Deed } from '../deed';
import { DeedService } from '../deed.service';

@Component({
  selector: 'app-get-deed',
  templateUrl: './get-deed.component.html',
  styleUrls: ['./get-deed.component.css']
})
export class GetDeedComponent implements OnInit {
  deeds: Deed[];
  constructor(
    private route: ActivatedRoute,
    private deedService: DeedService,
    private location: Location
  ) {}

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
