import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OrderComponent } from './order.component';

import { AuthGuard } from '../../core/guards/auth.guard';
import { OrderSaveGuard } from './order-save.guard';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'order', component: OrderComponent, canActivate: [AuthGuard], canDeactivate: [OrderSaveGuard] }
    ])
  ],
  providers: [OrderSaveGuard]
})
export class OrderModule { }
