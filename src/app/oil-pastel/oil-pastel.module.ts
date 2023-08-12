import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OilPastelRoutingModule } from './oil-pastel-routing.module';
import { OilPastelComponent } from './oil-pastel.component';
import { SharedModule } from '../shared-module/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OilPastelComponent
  ],
  imports: [
    CommonModule,
    OilPastelRoutingModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class OilPastelModule { }
