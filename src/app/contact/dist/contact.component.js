"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactComponent = void 0;
var forms_1 = require("@angular/forms");
var feedback_1 = require("../shared/feedback");
var core_1 = require("@angular/core");
var app_animations_1 = require("../animations/app.animations");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb, feedbackservice) {
        this.fb = fb;
        this.feedbackservice = feedbackservice;
        this.formErrors = {
            'firstname': '',
            'lastname': '',
            'telnum': '',
            'email': ''
        };
        this.validationMessages = {
            'firstname': {
                'required': 'First name is required.',
                'minlength': 'First name must be at least 2 characters long',
                'maxlength': 'First name cannot be more than 25 characters long'
            },
            'lastname': {
                'required': 'Last name is required.',
                'minlength': 'Last name must be at least 2 characters long',
                'maxlength': 'Last name cannot be more than 25 characters long'
            },
            'telnum': {
                'required': 'Tel. number is required.',
                'pattern': 'Tel. number must contain only numbers.'
            },
            'email': {
                'required': 'Email is required.',
                'email': 'Email not in valid format.'
            }
        };
        this.visibility = 'shown';
        this.waiting = false;
        this.contactType = feedback_1.ContactType;
        this.createForm();
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.visibility = 'hidden';
    };
    ContactComponent.prototype.createForm = function () {
        var _this = this;
        this.feedbackForm = this.fb.group({
            firstname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(25)]],
            lastname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(25)]],
            telnum: [0, [forms_1.Validators.required, forms_1.Validators.pattern]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            agree: false,
            contacttype: 'None',
            message: ''
        });
        this.feedbackForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re) set form validation messages
    };
    ContactComponent.prototype.onValueChanged = function (data) {
        if (!this.feedbackForm) {
            return;
        }
        var form = this.feedbackForm;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error messag (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        this.waiting = true;
        this.visibility = 'hidden';
        this.feedback = this.feedbackForm.value;
        this.feedbackservice.postFeedback(this.feedback)
            .subscribe(function (feedback) {
            _this.feedback = feedback;
            _this.waiting = false;
            _this.visibility = 'shown';
            console.log("Timeout In");
            setTimeout(function () {
                _this.visibility = 'hidden';
                _this.feedback = null;
            }, 5000);
            console.log("Timeout Out");
        }, function (errmess) { _this.feedback = null; _this.errMess = errmess; });
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
    };
    __decorate([
        core_1.ViewChild('fform')
    ], ContactComponent.prototype, "feedbackFormDirective");
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.scss'],
            host: {
                '[@flyInOut]': 'true',
                'style': 'display:block;'
            },
            animations: [
                app_animations_1.flyInOut(),
                app_animations_1.visibility(),
                app_animations_1.expand()
            ]
        })
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
