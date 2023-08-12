import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { StoreService } from '../services/store.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{

  cartData!:any;
  addressValue!:any;
  userAddress:any = [];
  userOrder:any = [];
 userToken!:any;
 userDetail!:any;
 email!:any;
 canPay:boolean = false;
 totPrice:any = 0;
 userData!:any;
 deliveryCharge:any = 50;
orderData!:any;

  addressForm!:FormGroup;

  paymentForm!:FormGroup

  constructor(private fb:FormBuilder, private userServ:UserService, private store:StoreService,private route:Router, private toast:NgToastService){}
 
   ngOnInit(): void {
    this.userToken = this.store.getToken();

    if (this.userToken) {
    this.userDetail = this.store.getData();
    this.email = this.userDetail[0].email;
   
    } 
 this.userServ.updateCartItemCountTwo(this.email);

    this.userServ.getUserByEmail(this.email).subscribe((user)=>{
       this.cartData = user[0].cart;
       
    })
    this.userServ.getUserByEmail(this.email).subscribe((res)=>{
      this.userData = res;
      
      this.cartData = this.userData[0]?.cart 
  
  
  this.cartData.map((x:any)=>{
    this.totPrice += (+x.price * ((100 - +x.percent)/100)) * x.prodQ;
               
           });
  
      })

    this.addressForm = this.fb.group({
      fname:['',Validators.required],
      email:['',Validators.required],
      phn:['',Validators.required],
      address:['',Validators.required],
      locality:['',Validators.required],
      city:['',Validators.required],
      selectedState:['', Validators.required],

    });

    this.paymentForm = this.fb.group({
    cname:['',Validators.required],
    cnum:['',Validators.required],
    exmonth:['',Validators.required],
    exyear:['',Validators.required],
    cvv:['',Validators.required]
    })
    
   
  }

  


  addressFormSub(){    
    this.addressValue = this.addressForm.value;
    this.userServ.getUserByEmail(this.email).subscribe((user:any)=>{
    this.userAddress.push(this.addressValue);
      this.userServ.sendUserOrdAdd(user[0], this.userAddress).subscribe()
      this.canPay = true;
  this.toast.success({detail:"Address Saved",summary:'Proceed To Payment!',duration:2350,position:'topCenter'});

    })  
  }

  paySubmit(){

    if (this.canPay) {
      this.userServ.getUserByEmail(this.email).subscribe((user: any) => {
        console.log(this.cartData, 'ad form sub');
        
        const newOrderData = this.cartData;
      
        const existingOrder = user[0].order ? user[0].order : [];
      
        existingOrder.push(newOrderData);
      
        const updatedUser = { ...user[0], order: existingOrder };
      
        this.userServ.sendUserOrder(updatedUser, existingOrder).subscribe(()=>{
          this.route.navigate(['/order'])
        });
      });
       
    }
    else{
      console.log('pay first');
  this.toast.warning({detail:"Oops!",summary:'Save Your Delivery Address!',duration:2350,position:'topCenter'});
      
    }
   
  }
}
