import { Component, OnInit } from '@angular/core';
import { DeedService } from '../services/deed.service';
import { Deed } from '../models/Deed';

@Component({
  selector: 'app-deeds',
  templateUrl: './deeds.component.html',
  styleUrls: ['./deeds.component.css']
})
export class DeedsComponent implements OnInit {
  deeds: Deed[];
  constructor(private deedService: DeedService) {}

  ngOnInit() {
    this.getAllDeeds();
  }

  getAllDeeds() {
    this.deedService.getAllDeeds().subscribe(deeds => {
      return (this.deeds = deeds);
    });
  }

  deleteDeed(event, deed) {
    console.log('hitting delete.....');
    this.deedService.deleteDeed(deed);
  }
}
