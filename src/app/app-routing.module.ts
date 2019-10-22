import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetsComponent } from './atoms/widgets/widgets.component';
import { EmployeeComponent } from './molecules/employee/employee.component';
import { ThemeSwitchComponent } from './molecules/theme-switch/theme-switch.component';
import { NotesComponent } from './organisms/notes/notes.component';
import { ChatComponent } from './organisms/chat/chat.component';
import { E404Component } from './molecules/e404/e404.component';
import { SignupComponent } from './molecules/signup/signup.component';
import { ProductAddComponent } from './molecules/product-add/product-add.component';
import { HomeComponent } from './atoms/home/home.component';

import { OrderSaveGuard } from './molecules/order/order-save.guard';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'component1/:multiplier/:multiplicand', component: WidgetsComponent },
  { path: 'notes', component: NotesComponent, canActivate: [AuthGuard]  },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard]  },
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
