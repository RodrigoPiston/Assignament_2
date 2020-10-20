import { baseURL } from './../shared/baseurl';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Promotion } from '../shared/promotion';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>( baseURL + 'promotions');    
  }

  getPromotion(id:string): Observable<Promotion> {
    return this.http.get<Promotion>( baseURL + 'promotions/' + id);
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion>( baseURL + 'promotions?featured=true')
      .pipe(map(promotion => promotion[0]));
  }
}
