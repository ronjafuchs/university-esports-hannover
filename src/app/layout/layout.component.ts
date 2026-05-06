import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet, UrlTree } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from '../home/home.component';
import { CommunityComponent } from '../community/community.component';
import { GamesComponent } from '../games/games.component';
import { TeamsComponent } from '../teams/teams.component';
@Component({
    selector: 'app-layout',
    imports: [RouterOutlet, RouterModule, MatListModule, MatIconModule,
        MatSidenavModule, MatToolbarModule, MatButtonModule,
        MatMenuModule, HomeComponent, CommunityComponent, GamesComponent, TeamsComponent, HomeComponent],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isShowing: boolean = false;



  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }

  callMethods() {
    console.log("sidenav toggle");
    this.toggleSidenav();
  }

  



}
