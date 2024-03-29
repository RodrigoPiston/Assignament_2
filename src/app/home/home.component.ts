import { Component, Inject, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut,expand } from "../animations/app.animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]':'true',
    'style': 'display:block;'
  },
  animations:[
    flyInOut(),
    expand()
  ]

})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader : Leader;
  dishErrMess: string;
  leaderErrMess: string;
  promotionErrMess: string;

  constructor(private dishService: DishService,
              private promotionService: PromotionService,
              private leaderService : LeaderService,
              @Inject('BaseURL') private BaseURL
              ) { }

  ngOnInit() {
    this.dishService.getFeaturedDish().subscribe(
      (featuredDish) => this.dish = featuredDish,
      errMess => this.dishErrMess = <any>errMess );
    this.leaderService.getFeaturedLeader().subscribe(
      (featuredLeader) => {this.leader = featuredLeader;},
      errMess => this.leaderErrMess = <any>errMess );
    this.promotionService.getFeaturedPromotion().subscribe(
      (featuredPromotion) => this.promotion = featuredPromotion,
      errMess => this.promotionErrMess = <any>errMess );
  }

}
