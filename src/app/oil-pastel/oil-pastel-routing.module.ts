import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OilPastelComponent } from './oil-pastel.component';

const routes: Routes = [{ path: '', component: OilPastelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OilPastelRoutingModule { }
