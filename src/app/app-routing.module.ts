import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GetDeedComponent } from './get-deed/get-deed.component';
import { GiveDeedComponent } from './give-deed/give-deed.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'givedeed',
    component: GiveDeedComponent
  },
  {
    path: 'getdeed',
    component: GetDeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
