import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Feature Modules
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { LoginModule } from './login/login.module';

// Components
import { AppComponent } from './app.component';
import { ProdComponent } from './prod/prod.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserStatusComponent } from './user-status/user-status.component';
import { NavComponent } from './nav/nav.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import { NotesComponent } from './notes/notes.component';
import { NumberIdentifierComponent } from './number-identifier/number-identifier.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { E404Component } from './e404/e404.component';
import { SignupComponent } from './signup/signup.component';
import { ProductAddComponent } from './product-add/product-add.component';

// Directives
import { ChangeTextDirective } from './change-text.directive';
import { ChangeColorDirective } from './change-color.directive';

// Pipes
import { FloorPipe } from './floor.pipe';
import { StringReversalPipe } from './string-reversal.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProdComponent,
    EmployeeComponent,
    UserStatusComponent,
    NavComponent,
    WidgetsComponent,
    ChangeTextDirective,
    ChangeColorDirective,
    ThemeSwitchComponent,
    NotesComponent,
    NumberIdentifierComponent,
    FloorPipe,
    StringReversalPipe,
    SidebarComponent,
    ContentComponent,
    E404Component,
    SignupComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ProductModule,
    OrderModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
