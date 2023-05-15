import {Component, HostBinding, Inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import WebApp from "@twa-dev/sdk";

import {animate, state, style, transition, trigger} from "@angular/animations";
import {LayoutComponent} from "../../home/layout/layout.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, LayoutComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],

})

export class WelcomeComponent implements OnInit{


 close() {
    WebApp.close()
 }
 ngOnInit(): void {
   WebApp.ready()
 }

}
