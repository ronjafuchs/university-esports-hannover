import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { CommunityComponent } from './community/community.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'teams', component: TeamsComponent },
    { path: 'community', component: CommunityComponent },
    { path: 'impressum', component: ImpressumComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }