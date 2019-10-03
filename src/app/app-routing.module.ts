import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetsComponent } from './widgets/widgets.component';
import { EmployeeComponent } from './employee/employee.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import { NotesComponent } from './notes/notes.component';
import { E404Component } from './e404/e404.component';
import { SignupComponent } from './signup/signup.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { HomeComponent } from './home/home.component';

import { OrderSaveGuard } from './order/order-save.guard';

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
