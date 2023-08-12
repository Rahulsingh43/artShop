import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlCarouselComponent } from './components/owl-carousel/owl-carousel.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { HttpService } from './services/http.service';
import { ServiceInterceptor } from './service.interceptor';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component'; 
import { SharedModule } from './shared-module/shared.module';
import { NgToastModule } from 'ng-angular-popup';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AboutComponent } from './components/about/about.component';
import { ScrollEventDirective } from './directives/scroll-event.directive';
import { LazyLoadImageModule } from 'ng-lazyload-image';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OwlCarouselComponent,
    SignupComponent,
    SigninComponent,
    CartComponent,
    FooterComponent,
    HomeComponent,
    PagenotfoundComponent,
    AboutComponent,
    ScrollEventDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    NgToastModule,
    LazyLoadImageModule
  ],
  providers: [HttpService,
  {
    provide:HTTP_INTERCEPTORS, useClass:ServiceInterceptor, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
