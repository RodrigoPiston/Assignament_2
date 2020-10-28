import { FeedbackService } from './../services/feedback.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';
import { Component, OnInit, ViewChild } from '@angular/core';
import { expand, flyInOut, visibility } from "../animations/app.animations";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
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
export class ContactComponent implements OnInit {

  @ViewChild('fform') feedbackFormDirective;

  formErrors =  {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email':''
  };

  validationMessages = {
    'firstname': {
      'required': 'First name is required.',
      'minlength': 'First name must be at least 2 characters long',
      'maxlength': 'First name cannot be more than 25 characters long',
    },
    'lastname': {
      'required': 'Last name is required.',
      'minlength': 'Last name must be at least 2 characters long',
      'maxlength': 'Last name cannot be more than 25 characters long',
    },
    'telnum': {
      'required': 'Tel. number is required.',
      'pattern': 'Tel. number must contain only numbers.',
    },
    'email':{
      'required': 'Email is required.',
      'email': 'Email not in valid format.'
    }
  };

  visibility = 'shown';
  waiting    = false;
  feedbackForm: FormGroup;
  feedback : Feedback;
  contactType = ContactType;
  errMess: string;

  constructor(private fb:FormBuilder,private feedbackservice: FeedbackService) { 
    this.createForm();
  }

  ngOnInit() {
    this.visibility ='hidden';
  }

  createForm(){
    this.feedbackForm = this.fb.group({
      firstname: ['',[Validators.required, Validators.minLength(2),Validators.maxLength(25)]],
      lastname: ['',[Validators.required, Validators.minLength(2),Validators.maxLength(25)]],
      telnum: [0, [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None',
      message:''
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    
    this.onValueChanged(); // (re) set form validation messages
  }

  
  onValueChanged(data?: any){
    if(!this.feedbackForm){
      return;
    }
    const form = this.feedbackForm;
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
  }

  onSubmit(){
    this.waiting    = true;
    this.visibility ='hidden'; 
    this.feedback = this.feedbackForm.value;
    this.feedbackservice.postFeedback(this.feedback)
      .subscribe(
        feedback =>{
          this.feedback = feedback; 
          this.waiting    = false;
          this.visibility = 'shown'
          console.log("Timeout In")
          setTimeout(()=>{ 
            this.visibility = 'hidden';
            this.feedback = null;
          }, 5000);
          console.log("Timeout Out")

        },
        errmess => { this.feedback = null;this.errMess = <any>errmess;}
      )
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackFormDirective.resetForm();
  }

}
