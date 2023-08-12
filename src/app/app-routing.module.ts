import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { CartComponent } from './components/cart/cart.component';
import { authGuard } from './guard/auth.guard';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:"signin",
    component:SigninComponent
  },
  {
    path:"cart",
    component:CartComponent,
    canActivate:[authGuard]
  },
{
  path:"about",
  component:AboutComponent
},
  {
    path: 'acrylic',
    loadChildren: () =>
      import('./madhubani/madhubani.module').then((m) => m.MadhubaniModule),
  },
  {
    path: 'detail/:id/:var',
    loadChildren: () =>
      import('./detail/detail.module').then((m) => m.DetailModule),
    },
  { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'traditional', loadChildren: () => import('./traditional/traditional.module').then(m => m.TraditionalModule) },
  { path: 'oil-pastel', loadChildren: () => import('./oil-pastel/oil-pastel.module').then(m => m.OilPastelModule) },
  { path: 'buddha', loadChildren: () => import('./buddha/buddha.module').then(m => m.BuddhaModule) },
  { path: 'water-color', loadChildren: () => import('./water-color/water-color.module').then(m => m.WaterColorModule) },
  {
    path:"**",
    component: PagenotfoundComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
