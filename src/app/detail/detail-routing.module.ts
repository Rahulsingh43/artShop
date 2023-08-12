import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail.component';
import { SimilarComponent } from '../components/similar/similar.component';

const routes: Routes = [{ path: '', component: DetailComponent,children:[{path:"",component:SimilarComponent}] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
