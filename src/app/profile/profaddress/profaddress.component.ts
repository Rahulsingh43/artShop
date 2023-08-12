import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profaddress',
  templateUrl: './profaddress.component.html',
  styleUrls: ['./profaddress.component.scss']
})
export class ProfaddressComponent implements OnInit{
  addressValue!:any;
  userData:any = [];
  userDetailShow!:any;
  permissionShow:boolean = false;
  userInfo!:any
  userToken!:any;
  email!:any;


constructor(private fb:FormBuilder, private http:HttpService, private userServ:UserService, private store:StoreService){}
  addressForm!:FormGroup;
  ngOnInit(): void {
  
    this.userToken = this.store.getToken();

    if (this.userToken) {
    this.userInfo = this.store.getData();
    this.email = this.userInfo[0].email;
    } 

    this.userServ.getUserByEmail(this.email).subscribe((user:any)=>{
      this.userDetailShow = user[0].address[0];
      if (this.userDetailShow != undefined) {
       
       this.permissionShow = true;
     }
 
     })


    this.addressForm = this.fb.group({
      
      address:[''],
      locality:[''],
      city:[''],
      selectedState:[''],

    });

  }
    

  addressFormSub(){
    console.log(this.addressForm.value);
    

    const edited_data = {
      address: (this.addressForm.value.address == '') ? this.userDetailShow?.address : this.addressForm.value.address,
      locality: (this.addressForm.value.locality == '') ? this.userDetailShow?.locality : this.addressForm.value.locality,
      city: (this.addressForm.value.city == '') ? this.userDetailShow?.city : this.addressForm.value.city,
      selectedState: (this.addressForm.value.selectedState == '') ? this.userDetailShow?.selectedState : this.addressForm.value.selectedState,
    }

this.userData.push(edited_data);

    this.userServ.getUserByEmail(this.email).subscribe((user:any)=>{
      console.log(user);
    
      this.userServ.sentUserAddress(user[0], this.userData).subscribe(()=>{
        this.userServ.getUserByEmail(this.email).subscribe((user:any)=>{
          this.userDetailShow = user[0].address[0];
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
