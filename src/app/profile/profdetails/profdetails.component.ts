import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profdetails',
  templateUrl: './profdetails.component.html',
  styleUrls: ['./profdetails.component.scss']
})
export class ProfdetailsComponent implements OnInit{
userToken!:any;
email!:any;
userInfo!:any;

  constructor(private fb:FormBuilder, private http:HttpService, private userserv:UserService, private store:StoreService){}

  userDetail!:FormGroup
  userDetailShow!:any;
  permissionShow:boolean = false;
  userData:any = [];

  ngOnInit(): void {
    
    this.userToken = this.store.getToken();

    if (this.userToken) {
    this.userInfo = this.store.getData();
    this.email = this.userInfo[0].email;
    } 

    this.userserv.getUserByEmail(this.email).subscribe((user:any)=>{
     this.userDetailShow = user[0].detail[0];
     if (this.userDetailShow != undefined) {
      
      this.permissionShow = true;
    }

    })

   
    this.userDetail = this.fb.group({
      email:[''],
      phn:[''],
      gender:[''],
    })


  }

  userFormSubmit(){

const edited_data = {
  email: (this.userDetail.value.email == '') ? this.userDetailShow?.email : this.userDetail.value.email,
  phn: (this.userDetail.value.phn == '') ? this.userDetailShow?.phn : this.userDetail.value.phn,
  gender: (this.userDetail.value.gender == '') ? this.userDetailShow?.gender : this.userDetail.value.gender,
}

this.userData.push(edited_data);
this.userserv.getUserByEmail(this.email).subscribe((user:any)=>{
  console.log(user);

  this.userserv.sentUserDetail(user[0], this.userData).subscribe(()=>{
    this.userserv.getUserByEmail(this.email).subscribe((user:any)=>{
      this.userDetailShow = user[0].detail[0];
      console.log(this.userDetailShow);
      if (this.userDetailShow != undefined) {
       
       this.permissionShow = true;
     }
    
     })
  })
  
})



  }

  edit(){
    this.permissionShow = false;

  }
}
