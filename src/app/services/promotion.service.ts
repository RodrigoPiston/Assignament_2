import { baseURL } from './../shared/baseurl';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Promotion } from '../shared/promotion';
import { map,catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient,private processHTTPMsgService:ProcessHTTPMsgService) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>( baseURL + 'promotions')
    .pipe(catchError(this.processHTTPMsgService.handleError));    
  }

  getPromotion(id:string): Observable<Promotion> {
    return this.http.get<Promotion>( baseURL + 'promotions/' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion>( baseURL + 'promotions?featured=true')
      .pipe(map(promotion => promotion[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
