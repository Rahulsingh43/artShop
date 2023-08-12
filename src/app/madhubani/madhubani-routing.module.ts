import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MadhubaniComponent } from './madhubani.component';

const routes: Routes = [{ path: '', component: MadhubaniComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MadhubaniRoutingModule { }
