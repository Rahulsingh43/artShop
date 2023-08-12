import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared-module/shared.module';
import { ProducteditComponent } from './productedit/productedit.component';
import { UsersdataComponent } from './usersdata/usersdata.component';


@NgModule({
  declarations: [
    AdminComponent,
    ProductsComponent,
    ProducteditComponent,
    UsersdataComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
