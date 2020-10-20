"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.DishdetailComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var forms_1 = require("@angular/forms");
var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(dishservice, route, location, fb, BaseURL) {
        this.dishservice = dishservice;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.BaseURL = BaseURL;
        this.formErrors = {
            'author': '',
            'comment': ''
        };
        this.validationMessages = {
            'author': {
                'required': 'Author name is required.',
                'minlength': 'Author name must be at least 2 characters long'
            },
            'comment': {
                'required': 'Comment is required.'
            }
        };
        this.createForm();
    }
    DishdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getDishIds()
            .subscribe(function (dishIds) { return _this.dishIds = dishIds; });
        this.route.params.pipe(operators_1.switchMap(function (params) { return _this.dishservice.getDish(params['id']); }))
            .subscribe(function (dish) { _this.dish = dish; _this.setPrevNext(dish.id); _this.dishcopy = dish; }, function (errMess) { return _this.errMess = errMess; });
    };
    DishdetailComponent.prototype.createForm = function () {
        var _this = this;
        this.commentForm = this.fb.group({
            author: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            comment: ['', forms_1.Validators.required],
            rating: 5
        });
        this.commentForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re) set form validation messages
    };
    DishdetailComponent.prototype.onValueChanged = function (data) {
        if (!this.commentForm) {
            return;
        }
        var form = this.commentForm;
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
        // -- Update the comments selections adding a new comment
        if (this.commentForm.valid) {
            this.comment = this.commentForm.value;
        }
    };
    DishdetailComponent.prototype.setPrevNext = function (dishId) {
        var index = this.dishIds.indexOf(dishId);
        this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
        this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    };
    DishdetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    DishdetailComponent.prototype.onSubmit = function () {
        var _this = this;
        // -- Formatting date for the comment
        this.comment.date = Date.now().toString();
        // -- Push the new comment in comments array
        this.dish.comments.push(this.comment);
        this.dishservice.putDish(this.dishcopy)
            .subscribe(function (dish) {
            _this.dish = dish;
            _this.dishcopy = dish;
        }, function (errmess) { _this.dish = null; _this.dishcopy = null, _this.errMess = errmess; });
        this.commentForm.reset({
            author: '',
            comment: '',
            rating: '5'
        });
        // -- Start the slider always in 5 stars
        this.commentFormDirective.resetForm({
            rating: '5'
        });
    };
    __decorate([
        core_1.ViewChild('fform')
    ], DishdetailComponent.prototype, "commentFormDirective");
    DishdetailComponent = __decorate([
        core_1.Component({
            selector: 'app-dishdetail',
            templateUrl: './dishdetail.component.html',
            styleUrls: ['./dishdetail.component.scss']
        }),
        __param(4, core_1.Inject('BaseURL'))
    ], DishdetailComponent);
    return DishdetailComponent;
}());
exports.DishdetailComponent = DishdetailComponent;
