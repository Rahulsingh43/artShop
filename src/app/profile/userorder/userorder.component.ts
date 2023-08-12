import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userorder',
  templateUrl: './userorder.component.html',
  styleUrls: ['./userorder.component.scss']
})
export class UserorderComponent implements OnInit{
  orderData!:any;
  userToken!:any;
  userDetail!:any;
  email!:any

  constructor(private http:HttpService, private userServ:UserService, private store:StoreService){}

  ngOnInit(): void {

    this.userToken = this.store.getToken();

    if (this.userToken) {
    this.userDetail = this.store.getData();
    this.email = this.userDetail[0].email;
    } 
    
    this.userServ.updateCartItemCountTwo(this.email);

    this.userServ.getUserByEmail(this.email).subscribe((user:any)=>{
this.orderData = user[0].order;

    })
  }
}
