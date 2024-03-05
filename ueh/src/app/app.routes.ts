import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { CommunityComponent } from './community/community.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { NgModule } from '@angular/core';
import { GamesComponent } from './games/games.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'teams', component: TeamsComponent },
    { path: 'community', component: CommunityComponent },
    { path: 'games', component: GamesComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { 
  }