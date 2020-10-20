import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from './../shared/baseurl';
import { Dish } from '../shared/dish';
import { map,catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient,private processHTTPMsgService: ProcessHTTPMsgService) { }

  // -- Simulate time delay
  getDishes(): Observable<Dish[]>{
    console.log(baseURL + 'dishes')
    return this.http.get<Dish[]>(baseURL + 'dishes')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDish(id: string) : Observable<Dish>{
    return this.http.get<Dish>( baseURL + 'dishes/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedDish(): Observable<Dish>{
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true')
      .pipe(map(dishes => dishes[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDishIds(): Observable<string[] | any > {
    return this.getDishes()
      .pipe(map(dishes => dishes.map(dish => dish.id)))
      .pipe(catchError(error => error));
  }

}
