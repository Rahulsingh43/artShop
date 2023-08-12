import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @ViewChild('showError') showError!: ElementRef<any>;

  constructor(private formBuild: FormBuilder, private http: HttpService, private userService:UserService, private router:Router, private toast:NgToastService) {}
  signUp!: FormGroup;
  img!: any;
  networkError!: string;
  errServer!: string;
  emailExist!: string;

  ngOnInit(): void {
    this.signUp = this.formBuild.group({
      first_name: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z].*[s]*$')],
      ],
      last_name: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z].*[s]*$')],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
          ),
        ],
      ],
      profile_pic: ['', Validators.required],
    });
  }

  
  showPassword: boolean = false;
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  
  signupValues!: any;
  selectImg(event: any) {
    this.img = event.target.files[0];
  }

  signupSubmit() {
    this.signupValues = this.signUp.value;
    console.log(this.signUp.value.email, 'signuo');

    const formData: FormData = new FormData();

    formData.append('first_name', this.signUp.value.first_name);
    formData.append('last_name', this.signUp.value.last_name);
    formData.append('email', this.signUp.value.email);
    formData.append('password', this.signUp.value.password);
    formData.append('profile_pic', this.img, this.img.name);

    this.http.signUpData(formData).subscribe(
      (res: any) => {
        console.log(res);

        if (res.status === 200) {
          console.log('registration done');
          const obj = Object.create(null);
          obj.email = this.signupValues.email;
          
          
          obj.password = this.signUp.value.password;
          obj.detail = [];
          obj.cart = [];
          obj.address = [];
          obj.oaddress = [];
          obj.order = [];

          this.userService.addUser(obj).subscribe();
    this.toast.success({detail:"SUCCESS",summary:'Sign Up Successful',duration:7000,position:'topCenter'});

          // this.router.navigate(['/signin'])
        } else if (res.status === 201) {
    this.toast.error({detail:"Error Message",summary:res.message,duration:7000,position:'topCenter'});

          this.emailExist = res.message;
        } else {
          this.errServer = 'Some Internal Error!';
        }
        if (this.emailExist || this.errServer) {
          setTimeout(() => {
            this.showError.nativeElement.style.display = 'none';
          }, 6000);
        }
      },
      (err) => {
        if (err.status === 0) {
    this.toast.error({detail:"Error Message",summary:'Network Error',duration:7000,position:'topCenter'});

          this.networkError = 'Network Error!';
        } else {
          this.errServer = 'Some Internal Error!';
        }

        if (this.errServer || this.networkError || this.emailExist) {

          setTimeout(() => {
            this.showError.nativeElement.style.display = 'none';
          }, 6000);
        }
      }
    );

    // this.signUp.reset();
  }

  // showSuccess() {
  // }
}
