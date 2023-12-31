import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterColorComponent } from './water-color.component';

const routes: Routes = [{ path: '', component: WaterColorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaterColorRoutingModule { }
