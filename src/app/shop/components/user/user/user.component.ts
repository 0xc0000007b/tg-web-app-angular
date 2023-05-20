import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import WebApp from '@twa-dev/sdk';
import { CartService } from '../../../../services/cart.service';
import { Subscription } from 'rxjs';
import { PizzaInterface, pizzas } from '../../welcome/welcome/interfaces';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../../home/header/header.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, HttpClientModule, HeaderComponent],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy, AfterViewInit {
  pizzasSubscription$!: Subscription;
  pizzas: PizzaInterface[] = [];

  constructor(private cartService: CartService) {}
  ngAfterViewInit() {}
  ngOnInit(): void {
    WebApp.MainButton.hide();
    this.pizzasSubscription$ = this.cartService
      .getItem()
      .subscribe((res) => (this.pizzas = res));
  }
  ngOnDestroy(): void {
    this.pizzasSubscription$.unsubscribe();
  }

  protected readonly WebApp = WebApp;
}
