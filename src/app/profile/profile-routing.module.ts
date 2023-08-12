import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfdetailsComponent } from './profdetails/profdetails.component';
import { ProfaddressComponent } from './profaddress/profaddress.component';
import { ProfilenavbarComponent } from './profilenavbar/profilenavbar.component';
import { UserorderComponent } from './userorder/userorder.component';

const routes: Routes = [{ path: '', component: ProfileComponent, children:[
  {path:"profilenav",component:ProfilenavbarComponent, outlet:"profnav"},
 { path:"userinfo",component:ProfdetailsComponent, outlet:"user"},
 {path:"useraddress",component:ProfaddressComponent, outlet:"user"},
 {path:"userorder",component:UserorderComponent, outlet:"user"}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
