import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { NgToastService } from 'ng-angular-popup';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{
  @ViewChild('showError') showError!: ElementRef<any>;

signinForm!:FormGroup
loginData!:any;
recieveLoginData!:any;
errorData!:any;
  networkError!: string;
  errServer!: string;
  emailExist!: string;

  constructor(private httpService:HttpService, private formbuild:FormBuilder, private route:Router,private store:StoreService,private toast:NgToastService){}

  ngOnInit(): void {
    this.signinForm = this.formbuild.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }

  showPassword: boolean = false;
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  signInSubmit(){
    this.loginData = this.signinForm.value
this.httpService.signInData(this.loginData).subscribe((res:any)=>{
this.recieveLoginData = res

if (res.status == 200) {

  this.store.setData(
    this.recieveLoginData.data.first_name,
    this.recieveLoginData.data.last_name,
    this.recieveLoginData.data.email,
    this.recieveLoginData.data.profile_pic,
    this.recieveLoginData.token
  );
  this.toast.success({detail:"SUCCESS",summary:'Sign In Successfully!',duration:2950,position:'topCenter'});

  setTimeout(()=>{
    this.route.navigate(['/'])
  },3000)
 
   
} 
else if (res.status === 201) {
  this.toast.error({detail:"Error Message",summary:res.message,duration:7000,position:'topCenter'});
  this.emailExist = res.message;
}
else {
  this.errServer = 'Some Internal Error!';
}
if (this.emailExist || this.errServer) {
  setTimeout(() => {
    this.showError.nativeElement.style.display = 'none';
  }, 6000);
}

},(err:any)=>{
  this.errorData = err;
  console.log(err);
  
  if (err.status === 0) {
    this.toast.error({detail:"Error Message",summary:'Network Error',duration:7000,position:'topCenter'});
    this.networkError = 'Network Error!';
  } else {
    this.errServer = 'Some Internal Error!';
  }

  if (this.errServer || this.networkError) {

    setTimeout(() => {
      this.showError.nativeElement.style.display = 'none';
    }, 6000);
  }
}
);
 }
}
