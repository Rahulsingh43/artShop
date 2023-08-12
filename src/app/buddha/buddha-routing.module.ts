import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuddhaComponent } from './buddha.component';

const routes: Routes = [{ path: '', component: BuddhaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuddhaRoutingModule { }
