import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { SimilarComponent } from '../components/similar/similar.component';
import { SharedModule } from '../shared-module/shared.module';
@NgModule({
  declarations: [
    DetailComponent,
    SimilarComponent,
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    SharedModule
  ]
})
export class DetailModule { }
