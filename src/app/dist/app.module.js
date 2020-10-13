"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
// -- Moduls
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var app_routing_module_1 = require("./app-routing/app-routing.module");
var flex_layout_1 = require("@angular/flex-layout");
var button_1 = require("@angular/material/button");
var card_1 = require("@angular/material/card");
var grid_list_1 = require("@angular/material/grid-list");
var list_1 = require("@angular/material/list");
var toolbar_1 = require("@angular/material/toolbar");
var dialog_1 = require("@angular/material/dialog");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var checkbox_1 = require("@angular/material/checkbox");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var select_1 = require("@angular/material/select");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var progress_spinner_1 = require("@angular/material/progress-spinner");
// -- Services
var dish_service_1 = require("./services/dish.service");
var promotion_service_1 = require("./services/promotion.service");
var leader_service_1 = require("./services/leader.service");
// -- Components
var app_component_1 = require("./app.component");
var menu_component_1 = require("./menu/menu.component");
var dishdetail_component_1 = require("./dishdetail/dishdetail.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
// -- Independent Imports
require("hammerjs");
var login_component_1 = require("./login/login.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            // -- All the components
            declarations: [
                app_component_1.AppComponent,
                menu_component_1.MenuComponent,
                dishdetail_component_1.DishdetailComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                contact_component_1.ContactComponent,
                login_component_1.LoginComponent
            ],
            // -- All the modules(libraries)
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                flex_layout_1.FlexLayoutModule,
                button_1.MatButtonModule,
                card_1.MatCardModule,
                dialog_1.MatDialogModule,
                grid_list_1.MatGridListModule,
                list_1.MatListModule,
                toolbar_1.MatToolbarModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                checkbox_1.MatCheckboxModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                select_1.MatSelectModule,
                slide_toggle_1.MatSlideToggleModule,
                progress_spinner_1.MatProgressSpinnerModule
            ],
            // -- For show the modals dialog
            entryComponents: [
                login_component_1.LoginComponent
            ],
            // -- All the Services
            providers: [dish_service_1.DishService, promotion_service_1.PromotionService, leader_service_1.LeaderService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
