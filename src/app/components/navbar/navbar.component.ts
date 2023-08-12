import { Component, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationEnd } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';
import { filter } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  emailAdmin:string = "rsc211@gmail.com";
  adminAuthentication:boolean = false;
  navbarFixed:boolean = false;
  baseUrl:any="https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/";
data!:any;
userToken!:any;
userDetail!:any;
fname!:string
prof_img!:string
email!:string;
cartData!:any
userData!:any;

totCartItem:any = 0;

loading:boolean = false;

constructor(private http:HttpService, private store:StoreService,private route:Router, private userserv:UserService, private chdec:ChangeDetectorRef){
  this.route.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe(() => {
    window.scrollTo(0, 0); 
  });
}

ngOnInit(): void {

this.route.events.subscribe((event)=>{
  if (event instanceof RouteConfigLoadStart) {
    this.loading = true;
  } else if (event instanceof RouteConfigLoadEnd) {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
})


  this.http.getData().subscribe((res)=>{
    this.data = res[0];
  })


  this.userserv.updateCartItemCountTwo(this.email)

  this.userserv.cartItemCount$.subscribe(
    (count: number) => {
      this.totCartItem = count;    
    }
  );

  if (this.email == this.emailAdmin) {
    console.log('hel');
    this.adminAuthentication = true;
  }
  else{
    console.log('f');
    
  }

//  this.chdec.detectChanges()
}


logedin(){
  this.userToken = this.store.getToken();

 if (this.userToken) {
 this.userDetail = this.store.getData();
 this.fname = this.userDetail[0].first_name;
 this.email = this.userDetail[0].email;
 this.prof_img = this.baseUrl + this.userDetail[0].prof_img;
 } 

 if (this.email == this.emailAdmin) {
  this.adminAuthentication = true;
}

return this.userToken
}

logedout(){
  this.adminAuthentication = false;
  this.store.getDestroy();
  
}

}
