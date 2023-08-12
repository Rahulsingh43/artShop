import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { StoreService } from '../services/store.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  baseUrl: any =
    'https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/';
  // totCartItem: number;
  data!: any;
  userToken: any;
  userDetail: any;
  fname: any;
  prof_img: any;
  lname!:any;
  email!:any;

  constructor(private http: HttpService, private storeServ: StoreService, private userServ:UserService) {}
  ngOnInit(): void {
    this.http.getData().subscribe((res) => {
      this.data = res[0];
    });

    this.userToken = this.storeServ.getToken();

    if (this.userToken) {
      this.userDetail = this.storeServ.getData();
      
      this.fname = this.userDetail[0].first_name;
      this.lname = this.userDetail[0].last_name;
      this.email = this.userDetail[0].email;
      this.prof_img = this.baseUrl + this.userDetail[0].prof_img;
    }
    this.userServ.updateCartItemCountTwo(this.email);

  }

  logedout() {
    this.storeServ.getDestroy();
  }
}
