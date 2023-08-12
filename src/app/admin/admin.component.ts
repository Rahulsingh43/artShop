import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
storeUsers:any = [];
usersFilter:any = [];
userOrder:any = [];

constructor(private http:HttpService, private userserv:UserService, private router:Router){}

ngOnInit(): void {
  
  this.router.navigate(['/admin/userdata'])

}

}
