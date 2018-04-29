import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SwingModule } from 'angular2-swing';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GiveDeedComponent } from './give-deed/give-deed.component';
import { DeedService } from './deed.service';
import { GetDeedComponent } from './get-deed/get-deed.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GiveDeedComponent,
    GetDeedComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SwingModule],
  providers: [DeedService],
  bootstrap: [AppComponent]
})
export class AppModule {}
