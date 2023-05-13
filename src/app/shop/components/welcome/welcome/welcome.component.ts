import {Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import WebApp from "@twa-dev/sdk";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent {

 close() {
    WebApp.close()
 }
}
