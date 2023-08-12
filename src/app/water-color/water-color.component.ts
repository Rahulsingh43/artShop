import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { StoreService } from '../services/store.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-water-color',
  templateUrl: './water-color.component.html',
  styleUrls: ['./water-color.component.scss']
})
export class WaterColorComponent implements OnInit{
  data!: any;
  filterData!: any;
  inputData!: string;
  page: number = 1;

  
  userToken!: any;
  userDetail!: any;
  email!: any;


  constructor(private service: HttpService, private store:StoreService, private userServ:UserService) {}
  ngOnInit(): void {
    this.userToken = this.store.getToken();

    if (this.userToken) {
      this.userDetail = this.store.getData();
      this.email = this.userDetail[0].email;
    }

    this.userServ.updateCartItemCountTwo(this.email);

    this.service.getData().subscribe((res) => {
      this.data = res;
      this.filterData = this.data.filter((x: any) => {
        return x.category == 'Water-Color';
      });
    });
  }
  sortByNum(key: string) {
    this.filterData.sort((a: any, b: any) => {
      const valueA = a[key];
      const valueB = b[key];
      const perc1 = a['percent'];
      const perc2 = b['percent'];
      return valueA * ((100 - +perc1)/100) - valueB  * ((100 - +perc2)/100);
    });
  }
  sortBydec(key: string) {
    this.filterData.sort((a: any, b: any) => {
      const valueA = a[key];
      const valueB = b[key];
      const perc1 = a['percent'];
      const perc2 = b['percent'];
      return valueB * ((100 - +perc2)/100) - valueA * ((100 - +perc1)/100) ;
    });
  }


  sortByAlpha(key: string) {

    this.filterData.sort((a: any, b: any) => {
      const valueA = a[key];
      const valueB = b[key];
      return valueA.toLowerCase() < valueB.toLowerCase() ? -1 : 1;
    });
  }

  performSearch(query: any) {
    this.service.getData().subscribe((data: any) => {
      this.data = data;
      this.filterData = this.data.filter((x: any) => {
        return x.category == 'Water-Color';
      });

      this.filterData = this.filterData.filter((x: any) => {
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

      this.filterData = this.data.filter((x: any) => {
        return x.category == 'Water-Color';
      });
    });
  }
}
