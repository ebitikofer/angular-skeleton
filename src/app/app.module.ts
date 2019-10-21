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
import { MatRadioModule } from '@angular/material/radio';

// Envirment and API vars
import { environment } from '../environments/environment';

// Feature Modules
import { ProductModule } from './molecules/product/product.module';
import { OrderModule } from './molecules/order/order.module';
import { LoginModule } from './molecules/login/login.module';

// Template Components
import { NavComponent } from './templates/nav/nav.component';
import { SidebarComponent } from './templates/sidebar/sidebar.component';
import { ContentComponent } from './templates/content/content.component';

// Components
import { AppComponent } from './app.component';
import { ProdComponent } from './molecules/prod/prod.component';
import { EmployeeComponent } from './molecules/employee/employee.component';
import { UserStatusComponent } from './molecules/user-status/user-status.component';
import { WidgetsComponent } from './molecules/widgets/widgets.component';
import { ThemeSwitchComponent } from './molecules/theme-switch/theme-switch.component';
import { NotesComponent } from './molecules/notes/notes.component';
import { NumberIdentifierComponent } from './molecules/number-identifier/number-identifier.component';
import { E404Component } from './molecules/e404/e404.component';
import { SignupComponent } from './molecules/signup/signup.component';
import { ProductAddComponent } from './molecules/product-add/product-add.component';
import { HomeComponent } from './molecules/home/home.component';
import { AuthenticationComponent } from './organisms/authentication/authentication.component';

// Directives
import { ChangeTextDirective } from './directives/change-text.directive';
import { ChangeColorDirective } from './directives/change-color.directive';

// Pipes
import { FloorPipe } from './pipes/floor.pipe';
import { StringReversalPipe } from './pipes/string-reversal.pipe';

// Services
import { FirebaseAuthService } from './core/auth.service';
import { DateTimeComponent } from './atoms/date-time/date-time.component';
import { ShrinkAnimationComponent } from './atoms/shrink-animation/shrink-animation.component';
import { SidebarRoutesComponent } from './molecules/sidebar-routes/sidebar-routes.component';
import { ChatComponent } from './organisms/chat/chat.component';

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
    HomeComponent,
    AuthenticationComponent,
    DateTimeComponent,
    ShrinkAnimationComponent,
    SidebarRoutesComponent,
    ChatComponent
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
    AngularFireDatabaseModule,
    MatRadioModule
  ],
  providers: [FirebaseAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
