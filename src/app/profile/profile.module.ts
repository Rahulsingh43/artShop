import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfdetailsComponent } from './profdetails/profdetails.component';
import { ProfaddressComponent } from './profaddress/profaddress.component';
import { ProfilenavbarComponent } from './profilenavbar/profilenavbar.component';
import { UserorderComponent } from './userorder/userorder.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfdetailsComponent,
    ProfaddressComponent,
    ProfilenavbarComponent,
    UserorderComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
