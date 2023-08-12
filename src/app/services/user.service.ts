import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registration } from '../class/registration';
import { catchError,throwError,Observable, Subject, BehaviorSubject, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  user_api = " http://localhost:3000/user";



  private cartItemCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public cartItemCount$: Observable<number> = this.cartItemCountSubject.asObservable();

  constructor(private http:HttpClient,) { }
  addUser(data:any){
    return this.http.post<any>(`${this.user_api}`,data);
  }

  getUser(){
    return this.http.get<any>(`${this.user_api}`);
  }

  getUserByEmail(email: string): Observable<any> {
    
    const url = `${this.user_api}?email=${email}`;
    return this.http.get<any>(url);
  }
 
  updateCart(user: any, cartItems: any[]): Observable<any> {
    const updatedUser = { ...user, cart: cartItems };
    
    const url = `${this.user_api}/${user.id}`;
   
    return this.http.put(url, updatedUser);
  }
  sentUserDetail(user: any, detail: any[]): Observable<any> {
    const updatedUser = { ...user, detail: detail };
    
    const url = `${this.user_api}/${user.id}`;
    // console.log(url,'urlll');
    // console.log(user.email,'user email');
    
    return this.http.put(url, updatedUser);
  }

  sentUserAddress(user: any, detail: any[]): Observable<any> {
    const updatedUser = { ...user, address: detail };
    
    const url = `${this.user_api}/${user.id}`;

    return this.http.put(url, updatedUser);
  }

  sendUserOrdAdd(user: any, address: any[]): Observable<any> {
    const updatedUser = { ...user, oaddress: address };
    
    const url = `${this.user_api}/${user.id}`;

    return this.http.put(url, updatedUser);
  }
  sendUserOrder(user: any, order: any[]): Observable<any> {
    const updatedUser = { ...user, order: order };
    
    const url = `${this.user_api}/${user.id}`;

    return this.http.put(url, updatedUser);
  }
  
  updateOrder(user: any, orderData: any[]): Observable<any> {
    const updatedUser = { ...user, order: orderData };
    
    const url = `${this.user_api}/${user.id}`;
  
    return this.http.put(url, updatedUser);
  }

   updateCartItemCount(count: number) {
    this.cartItemCountSubject.next(count);
 
  }

  updateCartItemCountTwo(email: string) {
    this.getUserByEmail(email).subscribe(
      (user: any) => {
        // console.log(user,'user add num');
        
        const count = user.length > 0 ? user[0].cart.length : 0;
        // console.log(count,'count num');
        
        this.updateCartItemCount(count);
      },
      (error) => {
        console.error('Error fetching cart item count:', error);
      }
    );
  }
}
