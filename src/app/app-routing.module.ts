import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetsComponent } from './molecules/widgets/widgets.component';
import { EmployeeComponent } from './molecules/employee/employee.component';
import { ThemeSwitchComponent } from './molecules/theme-switch/theme-switch.component';
import { NotesComponent } from './molecules/notes/notes.component';
import { E404Component } from './molecules/e404/e404.component';
import { SignupComponent } from './molecules/signup/signup.component';
import { ProductAddComponent } from './molecules/product-add/product-add.component';
import { HomeComponent } from './molecules/home/home.component';

import { OrderSaveGuard } from './molecules/order/order-save.guard';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'component1/:multiplier/:multiplicand', component: WidgetsComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'component3', component: ThemeSwitchComponent },
  { path: 'component4', component: EmployeeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'addproduct', component: ProductAddComponent },
  // { path: 'admin', component: AdminComponent },
  // { path: 'products', }
  { path: '**', component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [OrderSaveGuard]
})
export class AppRoutingModule { }
