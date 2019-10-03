import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

// Envirment and API vars
import { environment } from '../environments/environment';

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
import { HomeComponent } from './home/home.component';

// Directives
import { ChangeTextDirective } from './change-text.directive';
import { ChangeColorDirective } from './change-color.directive';

// Pipes
import { FloorPipe } from './floor.pipe';
import { StringReversalPipe } from './string-reversal.pipe';

// Services
import { FirebaseAuthService } from './core/auth.service';

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
    ProductAddComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ProductModule,
    OrderModule,
    LoginModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    ScrollingModule,
    BrowserAnimationsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [FirebaseAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
