import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  data!: any;
  id!: any;

  isAddedToCart: boolean = false;
  userDetail!: any;
  getAllData: any = [];
  cartData!: any;
  idFind!: any;
  userToken!: any;
  email!: any;
  category!: any;

  constructor(
    private http: HttpService,
    private store: StoreService,
    private ActiveRoute: ActivatedRoute,
    private router: Router,
    private userServ: UserService
  ) {}

  ngOnInit(): void {
    this.userToken = this.store.getToken();

    if (this.userToken) {
      this.userDetail = this.store.getData();

      this.email = this.userDetail[0].email;
    }

    this.userServ.updateCartItemCountTwo(this.email);

    this.ActiveRoute.paramMap.subscribe((res) => {
      this.id = res.get('id');
      this.category = res.get('var');
    });

    this.http.getData().subscribe((res) => {
      this.getAllData = res.filter((x) => x.id !== +this.id);
      this.getAllData = res.filter((x) => x.category == this.category);
      this.getAllData.sort(function () {
        return 0.5 - Math.random();
      });
      this.getAllData = this.getAllData.slice(0, 4);
    });

    this.http.getTrendingPaint().subscribe((res) => {
      const result = res[0];
      const mostsales = result.mostsale;
      const newt = result.new;
      const traditionals = result.traditional;
      const finArr = [...mostsales, ...newt, ...traditionals];

      this.data = finArr.find((x: any) => {
        return x.id == this.id;
      });
    });

    this.http.getDetail(this.id).subscribe(
      (res) => {
        this.data = res;
      },
      (err) => {
        const error = err;
      }
    );
  }

  addToCart(item: any) {
    if (!this.email) {
      this.router.navigate(['/signin']);
    } else {
      this.userServ.getUserByEmail(this.email).subscribe(
        (user: any) => {
          this.cartData = user[0].cart;
          const idFind = this.cartData.findIndex(
            (x: any) => x.id === this.data.id
          );
          // If the product is not present in the cart, add it with prodQ = 1
          if (idFind === -1) {
            this.data.prodQ = 1;
            this.cartData.push(this.data);
          } else {
            this.cartData[idFind].prodQ += 1;
          }
          const cartItems = user[0].cart != 0 ? [...user[0].cart] : [this.data];
          // console.log(cartItems);

          this.userServ.updateCart(user[0], cartItems).subscribe(
            () => {
              this.userServ.updateCartItemCountTwo(this.email);
            },
            (error) => {
              // console.error('Failed to update cart:', error);
            }
          );
        },
        (error) => {}
      );
      this.isAddedToCart = true;
    }
  }

  recieveId(ev: Event) {
    this.http.getDetail(ev).subscribe((res) => {
      this.data = res;
    });

    this.http.getData().subscribe((res) => {
      this.getAllData = res.filter((x) => x.id !== +this.id);
      this.getAllData = res.filter((x) => x.category == this.category);
      this.getAllData.sort(function () {
        return 0.5 - Math.random();
      });
      this.getAllData = this.getAllData.slice(0, 4);
    });

    this.isAddedToCart = false;
  }
}
