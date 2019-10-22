import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

// NGXS
import { NgxsModule, Actions, Store } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

// CDK UI
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';

// Material UI
import { MatRadioModule } from '@angular/material/radio';

// LOCAL

// Envirment and API vars
import { environment } from '../environments/environment';

// Routing
import { AppRoutingModule } from './app-routing.module';

// App
import { AppComponent } from './app.component';

// Template Components
import { NavComponent } from './templates/nav/nav.component';
import { SidebarComponent } from './templates/sidebar/sidebar.component';
import { ContentComponent } from './templates/content/content.component';

// Organism Components
import { AuthenticationComponent } from './organisms/authentication/authentication.component';
import { ChatComponent } from './organisms/chat/chat.component';

// Molecule Components // Feature Modules
import { ProductModule } from './molecules/product/product.module';
import { OrderModule } from './molecules/order/order.module';
import { LoginModule } from './molecules/login/login.module';
import { SignupComponent } from './molecules/signup/signup.component';
import { SidebarRoutesComponent } from './molecules/sidebar-routes/sidebar-routes.component';
import { NotesComponent } from './molecules/notes/notes.component';
import { E404Component } from './molecules/e404/e404.component';

import { EmployeeComponent } from './molecules/employee/employee.component';
import { WidgetsComponent } from './molecules/widgets/widgets.component';
import { ThemeSwitchComponent } from './molecules/theme-switch/theme-switch.component';

import { ProdComponent } from './molecules/prod/prod.component';
import { UserStatusComponent } from './molecules/user-status/user-status.component';
import { ProductAddComponent } from './molecules/product-add/product-add.component';
import { NumberIdentifierComponent } from './molecules/number-identifier/number-identifier.component';

// Atom Components
import { HomeComponent } from './atoms/home/home.component';
import { SelectListComponent } from './atoms/select-list/select-list.component';
import { DateTimeComponent } from './atoms/date-time/date-time.component';
import { ShrinkAnimationComponent } from './atoms/shrink-animation/shrink-animation.component';

// Directives
import { ChangeTextDirective } from './core/directives/change-text.directive';
import { ChangeColorDirective } from './core/directives/change-color.directive';

// Pipes
import { FloorPipe } from './core/pipes/floor.pipe';
import { StringReversalPipe } from './core/pipes/string-reversal.pipe';

// Services
import { FirebaseAuthService } from './core/auth.service';

// State
import { SettingsState } from './store/state/settings.state';
import { UserState } from './store/state/user.state';
import { AuthState } from './store/state/auth.state';


@NgModule({
  declarations: [
    AppComponent,

    NavComponent,
    SidebarComponent,
    ContentComponent,

    AuthenticationComponent,
    ChatComponent,

    SignupComponent,
    SidebarRoutesComponent,
    NotesComponent,
    E404Component,

    EmployeeComponent,
    WidgetsComponent,
    ThemeSwitchComponent,

    ProdComponent,
    UserStatusComponent,
    ProductAddComponent,
    NumberIdentifierComponent,

    HomeComponent,
    SelectListComponent,
    DateTimeComponent,
    ShrinkAnimationComponent,

    ChangeTextDirective,
    ChangeColorDirective,
    
    FloorPipe,
    StringReversalPipe,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,

    NgxsModule.forRoot([UserState, AuthState, SettingsState], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      storage: 1,
      key: [
        'auth',
        'settings',
        'users'
      ]
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    // !environment.production ?
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),

    DragDropModule,
    ScrollingModule,
    MatRadioModule,

    AppRoutingModule,

    ProductModule,
    OrderModule,
    LoginModule,
  ],
  providers: [FirebaseAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
