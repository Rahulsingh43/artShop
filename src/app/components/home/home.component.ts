import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
 
constructor(private service:HttpService, private store:StoreService, private userserv:UserService){}
trendData!:any;
newData!:any;
mostsaleData!:any;
traditionalData!:any;
userToken!:any;
userDetail!:any;
email!:any;

num:number = 100;
  ngOnInit(): void {
    this.userToken = this.store.getToken();

    if (this.userToken) {
      this.userDetail = this.store.getData();
     
      this.email = this.userDetail[0].email;
      } 

 this.userserv.updateCartItemCountTwo(this.email);


    this.service.getTrending().subscribe((res:any)=>{
  this.trendData = res;
  this.newData = this.trendData[0].new
  this.mostsaleData = this.trendData[0].mostsale
  this.traditionalData = this.trendData[0].traditional
  // console.log(this.mostsaleData);
  
    })
  }

  
}
