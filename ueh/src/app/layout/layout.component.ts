import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet, UrlTree } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from '../home/home.component';
import { CommunityComponent } from '../community/community.component';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatListModule, MatIconModule, 
    MatSidenavModule, MatToolbarModule, MatButtonModule, 
    MatMenuModule, HomeComponent, CommunityComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
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
