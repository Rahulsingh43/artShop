import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuddhaRoutingModule } from './buddha-routing.module';
import { BuddhaComponent } from './buddha.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared-module/shared.module';


@NgModule({
  declarations: [
    BuddhaComponent
  ],
  imports: [
    CommonModule,
    BuddhaRoutingModule,
    FormsModule,
    NgxPaginationModule,
    SharedModule
  ]
})
export class BuddhaModule { }
