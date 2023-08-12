import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
   cartData!:any
   userData!:any;
   totPrice:any = 0;
   deliveryCharge:number = 50
   userToken!:any;
   email!:any;
   userDetail!:any;
   totProd:any = 0;

constructor(private userserv:UserService, private store:StoreService){}

  ngOnInit(): void {
  console.log('im cart');
  this.userToken = this.store.getToken();

  if (this.userToken) {
  this.userDetail = this.store.getData();
 
  this.email = this.userDetail[0].email;
 
  } 
 this.userserv.updateCartItemCountTwo(this.email);

    this.userserv.getUserByEmail(this.email).subscribe((res)=>{
    this.userData = res;
    // console.log(this.userData,'userdataaa');
    
    this.cartData = this.userData[0].cart 
// console.log(this.cartData,'cart dataa');


this.cartData.map((x:any)=>{
  this.totPrice += (+x.price * ((100 - +x.percent)/100)) * x.prodQ;           
  });

this.cartData.map((x:any)=>{
  this.totProd += +x.prodQ  
});

    })
  }

  
  decrement(obj:any){
 console.log('god');
 
   const objFind = this.cartData.find((x:any)=> x.id == obj.id);
   const objIndex = this.cartData.findIndex((x:any)=> x.id == obj.id);
    objFind.prodQ--;

    if (obj.prodQ == 0) {
      this.cartData.splice(objIndex,1);
    }

  this.userserv.getUserByEmail(this.email).subscribe((user:any)=>{
    
    this.userserv.updateCart(user[0], this.cartData).subscribe(
      () => {
this.userserv.updateCartItemCountTwo(this.email);
this.totPrice = 0;
this.cartData.map((x:any)=>{
  this.totPrice += (+x.price * ((100 - +x.percent)/100)) * x.prodQ;
         });
         this.totProd = 0;
         this.cartData.map((x:any)=>{
           this.totProd += +x.prodQ  
         });
      },
      (error) => {
        // console.error('Failed to update cart:', error);
      }
    );
  })  

  
  }

  increment(obj:any){
    const objFind = this.cartData.find((x:any)=> x.id == obj.id);
    const objIndex = this.cartData.findIndex((x:any)=> x.id == obj.id);
     objFind.prodQ++;
 
     if (obj.prodQ == 0) {
       this.cartData.splice(objIndex,1);
     }
 
   this.userserv.getUserByEmail(this.email).subscribe((user:any)=>{
     this.userserv.updateCart(user[0], this.cartData).subscribe(
       () => {
 this.userserv.updateCartItemCountTwo(this.email);
 this.totPrice = 0;
 this.cartData.map((x:any)=>{
   this.totPrice += (+x.price * ((100 - +x.percent)/100)) * x.prodQ;
    
});
this.totProd = 0;
this.cartData.map((x:any)=>{
  this.totProd += +x.prodQ  
});
       },
       (error) => {
         // console.error('Failed to update cart:', error);
       }
     );

   })

  }

  deleteItem(obj:any){
    const objFind = this.cartData.find((x:any)=> x.id == obj.id);
    const objIndex = this.cartData.findIndex((x:any)=> x.id == obj.id);

    this.cartData.splice(objIndex,1);

    this.userserv.getUserByEmail(this.email).subscribe((user:any)=>{
      this.userserv.updateCart(user[0], this.cartData).subscribe(
        () => {
  this.userserv.updateCartItemCountTwo(this.email);
        },
        (error) => {
          // console.error('Failed to update cart:', error);
        }
      );
 
    })

  }
}
