import { Component, OnInit } from '@angular/core';
import { DeedService } from '../services/deed.service';
import { Deed } from '../models/Deed';

@Component({
  selector: 'app-give-deed',
  templateUrl: './give-deed.component.html',
  styleUrls: ['./give-deed.component.css']
})
export class GiveDeedComponent implements OnInit {
  deed: Deed = {
    id: '',
    description: ''
  };

  constructor(private deedService: DeedService) {}

  ngOnInit() {}

  onSubmit() {
    if (this.deed.description !== '') {
      this.deedService.addDeed(this.deed);
      this.deed.description = '';
    }
  }
}
