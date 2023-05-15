import {Component, HostBinding, OnInit, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {RouterLink, RouterLinkActive} from "@angular/router";

import WebApp from "@twa-dev/sdk";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
   trigger('open', [
     state('opened', style({width:  200, visibility: 'visible'})),
      state('closed', style({width:0,  visibility: 'hidden'})),
      transition('opened<=>closed', animate(300))
    ])
  ],
  providers: []
})
export class HeaderComponent{

    state: string = 'closed';
    setSate(): void {
      this.state = this.state == 'closed' ? 'opened' : 'closed'
    }
  protected readonly WebApp = WebApp;
}
