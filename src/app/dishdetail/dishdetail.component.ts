import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comment';
import { visibility,flyInOut,expand } from '../animations/app.animations'

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  host: {
    '[@flyInOut]':'true',
    'style': 'display:block;'
  },
  animations:[
    flyInOut(),
    visibility(),
    expand()
  ]

})
export class DishdetailComponent implements OnInit {


    @ViewChild('fform') commentFormDirective;

    dishIds: string[];
    prev: string;
    next: string;
    errMess: string;
    commentForm: FormGroup;
    comment : Comment;
    dish: Dish;
    dishcopy: Dish;
    visibility = 'shown';


    formErrors =  {
      'author': '',
      'comment': '',
    };

    validationMessages = {
      'author': {
        'required': 'Author name is required.',
        'minlength': 'Author name must be at least 2 characters long',
      },
      'comment': {
        'required': 'Comment is required.',
      },
    };

    constructor(private dishservice: DishService,
      private route: ActivatedRoute,
      private location: Location,private fb:FormBuilder, @Inject('BaseURL') private BaseURL) { 
        this.createForm();
    }
  
    ngOnInit() {
      this.dishservice.getDishIds()
        .subscribe((dishIds) => this.dishIds = dishIds);
        
      this.route.params.pipe(switchMap((params:Params) => { this.visibility ='hidden'; return this.dishservice.getDish(params['id']);}))
        .subscribe(
          dish => {this.dish = dish; this.dishcopy = dish;this.setPrevNext(dish.id); this.visibility = 'shown' },
          errMess => this.errMess = <any>errMess
          );
    }

    createForm(){
      this.commentForm = this.fb.group({
        author: ['',[Validators.required, Validators.minLength(2)]],
        comment: ['',Validators.required],
        rating : 5
      });
  
      this.commentForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
      
      this.onValueChanged(); // (re) set form validation messages
    }

    onValueChanged(data?: any){
      if(!this.commentForm){
        return;
      }
      const form = this.commentForm;
      for(const field in this.formErrors){
        if(this.formErrors.hasOwnProperty(field)){
          // clear previous error messag (if any)
          this.formErrors[field] = '';
          const control = form.get(field);
          if(control && control.dirty && !control.valid){
            const messages = this.validationMessages[field];
            for(const key in control.errors){
              if(control.errors.hasOwnProperty(key)){
                this.formErrors[field] += messages[key] + ' ';
              }
            }
          }
        }
      }
      // -- Update the comments selections adding a new comment
      if(this.commentForm.valid){
        this.comment = this.commentForm.value;
      }
    }

    setPrevNext(dishId: string){
      const index = this.dishIds.indexOf(dishId);
      this.prev = this.dishIds[(this.dishIds.length + index - 1 ) % this.dishIds.length];
      this.next = this.dishIds[(this.dishIds.length + index + 1 ) % this.dishIds.length];
    }
  
    goBack(): void {
      this.location.back();
    }  

    onSubmit(){
      // -- Formatting date for the comment
      this.comment.date = Date.now().toString();
      // -- Push the new comment in comments array
      this.dish.comments.push(this.comment)
      this.dishservice.putDish(this.dishcopy)
        .subscribe(
          dish =>{
            this.dish = dish; this.dishcopy = dish;
          },
          errmess => { this.dish = null; this.dishcopy = null, this.errMess = <any>errmess;}
        )
      this.commentForm.reset({
        author: '',
        comment: '',
        rating : '5'
      });

      // -- Start the slider always in 5 stars
      this.commentFormDirective.resetForm({
        rating : '5'
      });
    }
}