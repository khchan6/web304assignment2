import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RocketsComponent } from './rockets/rockets.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SinglerocketComponent } from './singlerocket/singlerocket.component';

const routes: Routes = [
  {
    path: 'rocket',
    component: RocketsComponent,
  },

  {
    path: 'rocket/:rocket_id',
    component: SinglerocketComponent,
  },

  {
    path: 'about',
    component: AboutComponent,
  },

  {
    path: '',
    component: HomeComponent,
  },

  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
