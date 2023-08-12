import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaterColorRoutingModule } from './water-color-routing.module';
import { WaterColorComponent } from './water-color.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared-module/shared.module';


@NgModule({
  declarations: [
    WaterColorComponent
  ],
  imports: [
    CommonModule,
    WaterColorRoutingModule,
    FormsModule,
    NgxPaginationModule,
    SharedModule
  ]
})
export class WaterColorModule { }
