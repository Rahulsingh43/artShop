import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Painting } from '../class/painting';
import { UserService } from '../services/user.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-traditional',
  templateUrl: './traditional.component.html',
  styleUrls: ['./traditional.component.scss']
})
export class TraditionalComponent implements OnInit{
  data!: any;
  filterTrad!: any;
  inputData!: string;
  page: number = 1;

  userToken!: any;
  userDetail!: any;
  email!: any;

  constructor(private service: HttpService, private userServ:UserService, private store:StoreService) {}
  ngOnInit(): void {
    this.userToken = this.store.getToken();

    if (this.userToken) {
      this.userDetail = this.store.getData();
      this.email = this.userDetail[0].email;
    }

    this.userServ.updateCartItemCountTwo(this.email);
    
    this.service.getData().subscribe((res) => {
      this.data = res;
      
      this.filterTrad = this.data.filter((x: any) => {
        return x.category == 'Traditional';
      });
    });
  }

  sortByNum(key: string) {
    this.filterTrad.sort((a: any, b: any) => {
      const valueA = a[key];
      const valueB = b[key];
      const perc1 = a['percent'];
      const perc2 = b['percent'];
      return valueA * ((100 - +perc1)/100) - valueB  * ((100 - +perc2)/100);
    });
  }
  sortBydec(key: string) {
    this.filterTrad.sort((a: any, b: any) => {
      const valueA = a[key];
      const valueB = b[key];
      const perc1 = a['percent'];
      const perc2 = b['percent'];
      return valueB * ((100 - +perc2)/100) - valueA * ((100 - +perc1)/100) ;
    });
  }


  sortByAlpha(key: string) {

    this.filterTrad.sort((a: any, b: any) => {
      const valueA = a[key];
      const valueB = b[key];
      return valueA.toLowerCase() < valueB.toLowerCase() ? -1 : 1;
    });
  }

  performSearch(query: any) {
    this.service.getData().subscribe((data: any) => {
      this.data = data;
      this.filterTrad = this.data.filter((x: any) => {
        return x.category == 'Traditional';
      });

      this.filterTrad = this.filterTrad.filter((x: any) => {
        return (
          x.title.toLowerCase().includes(query.toLowerCase()) ||
          x.medium.toLowerCase().includes(query.toLowerCase()) ||
          x.price.includes(query) ||
          x.artist.toLowerCase().includes(query.toLowerCase()) ||
          x.size.includes(query)
        );
      });
    });
  }

  continue() {
    this.service.getData().subscribe((res) => {
      this.data = res;

      this.filterTrad = this.data.filter((x: any) => {
        return x.category == 'Traditional';
      });
    });
  }
}
