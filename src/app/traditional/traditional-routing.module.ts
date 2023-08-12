import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraditionalComponent } from './traditional.component';

const routes: Routes = [{ path: '', component: TraditionalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraditionalRoutingModule { }
