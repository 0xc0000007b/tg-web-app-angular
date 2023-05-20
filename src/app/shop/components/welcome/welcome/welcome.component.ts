import {
  AfterContentInit,
  AfterViewInit,
  Component,
  HostBinding,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import WebApp from '@twa-dev/sdk';

import { RouterLink } from '@angular/router';
import { CartService } from '../../../../services/cart.service';
import { Telegram } from '@twa-dev/types';

import { PizzaAbout, pizzas, PizzaInterface } from './interfaces';

import { Subscription } from 'rxjs';
import { HeaderComponent } from '../../home/header/header.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent
  implements OnInit, OnDestroy, AfterViewInit, AfterContentInit
{
  pizzass!: PizzaAbout[];
  pizzas: PizzaInterface[] = [];

  private pizzasSubscription$!: Subscription;

  getTotalPrice(items: PizzaInterface[]) {
    return items.reduce((acc, pizza) => {
      return (acc += pizza.price);
    }, 0);
  }

  sendCallback = () => {
    const data = {
      queryId: WebApp.initDataUnsafe.query_id,
      pizzas: this.pizzas,
      totalPrice: this.getTotalPrice(this.pizzas),
    };
    WebApp.sendData(data);
  };
  ngAfterViewInit() {
    this.sendData();
  }
  ngAfterContentInit() {
    this.sendData();
  }

  sendData() {
    WebApp.onEvent('mainButtonClicked', this.sendCallback);
    WebApp.offEvent('mainButtonClicked', this.sendCallback);
  }
  addToCartMar(pizza: PizzaInterface) {
    this.pizzas.push(pizza);
    WebApp.MainButton.setParams({
      text: 'оплатить ' + this.getTotalPrice(this.pizzas) + ' рублей',
    });
  }

  ngOnDestroy(): void {
    this.pizzasSubscription$.unsubscribe();
  }

  close() {
    WebApp.close();
  }
  ngOnInit(): void {
    WebApp.ready();
    this.pizzasSubscription$ = this.cartService
      .getItem()
      .subscribe((res) => (this.pizzas = res));
    this.pizzass = pizzas;
    WebApp.MainButton.show();
    WebApp.MainButton.setParams({
      text: 'оплатить',
    });
    this.sendData();
  }
  constructor(
    private cartService: CartService,
    @Inject(Window) private window: Window
  ) {}
}
