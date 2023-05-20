import { Injectable } from '@angular/core';
import { PizzaInterface } from '../shop/components/welcome/welcome/interfaces';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  pizzas: PizzaInterface[] = [];
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  inPizza: Subject<PizzaInterface[]> = new BehaviorSubject<PizzaInterface[]>(
    this.pizzas
  );
  url: string =
    'https://f6380e14-4e24-47a1-a8a0-250c672b1644.selcdn.net/pizzas';

  getItem() {
    return this.http
      .get<PizzaInterface[]>(
        'https://f6380e14-4e24-47a1-a8a0-250c672b1644.selcdn.net/pizza-get'
      )
      .pipe(map((res) => res as PizzaInterface[]));
  }
  setNull(): void {
    this.pizzas = [];
  }
  sendPizza(data: {
    queryId: string | undefined;
    pizzas: PizzaInterface[];
    totalPrice: number;
  }) {
    return this.http.post(
      'https://f6380e14-4e24-47a1-a8a0-250c672b1644.selcdn.net/pizza-post',
      data
    );
  }

  constructor(private http: HttpClient) {}
}
