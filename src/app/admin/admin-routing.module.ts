import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { UsersdataComponent } from './usersdata/usersdata.component';

const routes: Routes = [{ path: '', component: AdminComponent, children:[
  {path:"userdata", component:UsersdataComponent},
  {path:"products",component:ProductsComponent},
  {path:"products/edit/:id",component:ProducteditComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
