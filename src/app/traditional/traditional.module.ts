import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraditionalRoutingModule } from './traditional-routing.module';
import { TraditionalComponent } from './traditional.component';
import { SharedModule } from '../shared-module/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TraditionalComponent
  ],
  imports: [
    CommonModule,
    TraditionalRoutingModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class TraditionalModule { }
