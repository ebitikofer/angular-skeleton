import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdComponent } from './prod/prod.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { UserStatusComponent } from './user-status/user-status.component';
import { NavComponent } from './nav/nav.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { ChangeTextDirective } from './change-text.directive';
import { ChangeColorDirective } from './change-color.directive';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import { NotesComponent } from './notes/notes.component';
import { NumberIdentifierComponent } from './number-identifier/number-identifier.component';
import { FloorPipe } from './floor.pipe';
import { StringReversalPipe } from './string-reversal.pipe';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { E404Component } from './e404/e404.component';

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
    E404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
