import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MadhubaniRoutingModule } from './madhubani-routing.module';
import { MadhubaniComponent } from './madhubani.component';
import { SharedModule } from '../shared-module/shared.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    MadhubaniComponent
  ],
  imports: [
    CommonModule,
    MadhubaniRoutingModule,
    FormsModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class MadhubaniModule { }
