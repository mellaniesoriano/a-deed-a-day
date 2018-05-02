import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SwingModule } from 'angular2-swing';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GiveDeedComponent } from './give-deed/give-deed.component';
import { DeedsComponent } from './deeds/deeds.component';
import { DeedService } from './services/deed.service';
import { GetDeedComponent } from './get-deed/get-deed.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NavbarComponent } from './navbar/navbar.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GiveDeedComponent,
    GetDeedComponent,
    DeedsComponent,
    NavbarComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [DeedService],
  bootstrap: [AppComponent]
})
export class AppModule {}
