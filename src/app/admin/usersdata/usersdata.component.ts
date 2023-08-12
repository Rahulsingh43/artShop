import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-usersdata',
  templateUrl: './usersdata.component.html',
  styleUrls: ['./usersdata.component.scss']
})

export class UsersdataComponent implements OnInit{
  storeUsers:any = [];
  usersFilter:any = [];
  userOrder:any = [];

constructor(private http:HttpService, private userserv:UserService){}

ngOnInit(): void {
  this.userserv.getUser().subscribe((user:any)=>{
    this.storeUsers = user;
    
    this.usersFilter = this.storeUsers.filter((x:any)=>{
      return x.order.length != '';
    })
    
  }) 
}
}
