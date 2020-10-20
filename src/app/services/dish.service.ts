import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from './../shared/baseurl';
import { Dish } from '../shared/dish';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }

  // -- Simulate time delay
  getDishes(): Observable<Dish[]>{
    console.log(baseURL + 'dishes')
    return this.http.get<Dish[]>(baseURL + 'dishes');
  }

  getDish(id: string) : Observable<Dish>{
    return this.http.get<Dish>( baseURL + 'dishes/' + id);
  }

  getFeaturedDish(): Observable<Dish>{
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true')
      .pipe(map(dishes => dishes[0]));
  }

  getDishIds(): Observable<string[] | any > {
    return this.getDishes()
      .pipe(map(dishes => dishes.map(dish => dish.id)));
  }

}
