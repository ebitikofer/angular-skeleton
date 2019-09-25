import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetsComponent } from './widgets/widgets.component';
import { EmployeeComponent } from './employee/employee.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import { NotesComponent } from './notes/notes.component';
import { E404Component } from './e404/e404.component';

const routes: Routes = [
  { path: '', redirectTo: 'component1/3/4', pathMatch: 'full' },
  { path: 'component1/:multiplier/:multiplicand', component: WidgetsComponent },
  { path: 'component2', component: NotesComponent },
  { path: 'component3', component: ThemeSwitchComponent },
  { path: 'component4', component: EmployeeComponent },
  { path: '**', component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
