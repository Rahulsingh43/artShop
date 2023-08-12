import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { StoreService } from '../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  cartData!: any;
  userToken!: any;
  userDetail!: any;
  email!: any;
  userData!: any;

  constructor(
    private userServ: UserService,
    private store: StoreService,
  ) {}

  ngOnInit(): void {
    this.userToken = this.store.getToken();

    if (this.userToken) {
      this.userDetail = this.store.getData();
      this.email = this.userDetail[0].email;
    }
    this.userServ.updateCartItemCountTwo(this.email);

    this.userServ.getUserByEmail(this.email).subscribe((user) => {
      this.cartData = user[0].cart;

      this.cartData.splice(0);
    });

    this.userServ.getUserByEmail(this.email).subscribe((user: any) => {
      this.userServ.updateCart(user[0], this.cartData).subscribe(
        () => {
          this.userServ.updateCartItemCountTwo(this.email);
        },
        (error) => {
          console.error('Failed to update cart:', error);
        }
      );
    });
  }
}
