import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-community',
  standalone: true,
  imports: [RouterOutlet, RouterModule,],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {

}
