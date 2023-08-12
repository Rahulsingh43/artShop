import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Painting } from 'src/app/class/painting';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit{
  data!: Painting[];
  filterData!: any;
  inputData!: string;
  page: number = 1;

  imgData!:any;
  myImage!:any;
  baseString:any[] = [];

  productForm!: FormGroup;

  constructor(private http: HttpService, private fb: FormBuilder, private route:Router) {}
  ngOnInit(): void {
    this.http.getData().subscribe((res) => {
      this.data = res;
    });

    this.productForm = this.fb.group({
      category: ['',Validators.required],
      title: ['',Validators.required],
      size: ['',Validators.required],
      price: ['',Validators.required],
      percent: ['',Validators.required],
      desc: ['',Validators.required],
      shape: ['',Validators.required],
      artist: ['',Validators.required],
      medium: ['',Validators.required],
      return: ['',Validators.required],
      // img: ['',Validators.required]
    })
  }

  sortByNum(key: string) {
    this.filterData.sort((a: any, b: any) => {
      const valueA = a[key];
      const valueB = b[key];
      return valueA - valueB;
    });
  }
  sortBydec(key: string) {
    this.filterData.sort((a: any, b: any) => {
      const valueA = a[key];
      const valueB = b[key];
      return valueB - valueA;
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
    this.http.getData().subscribe((data: any) => {
      this.data = data;
      this.data = this.data.filter((x: any) => {
        return (
          x.title.toLowerCase().includes(query.toLowerCase()) ||
          x.medium.toLowerCase().includes(query.toLowerCase()) ||
          x.price.includes(query) ||
          x.artist.toLowerCase().includes(query.toLowerCase()) ||
          x.category.toLowerCase().includes(query.toLowerCase()) ||
          x.size.includes(query)
        );
      });
    });
  }

  continue() {
    this.http.getData().subscribe((res) => {
      this.data = res;
    });
  }

  editProduct(id: any, data: any) {
    this.http.updateData(id, data).subscribe();
  }

  deleteProduct(id: any) {
    this.http.deleteData(id).subscribe(()=>{
      this.http.getData().subscribe((res) => {
        this.data = res;
      });
    });
   
    
  }

  updateProduct(data: any) {
    this.http.sendData(data).subscribe();
  }
  changimg(ev:any){


    const file = ev.target.files[0];

 if (file) {

  const reader = new FileReader();

  reader.onload = this.handleReaderLoaded.bind(this);
  
  reader.readAsBinaryString(file);

  console.log(this.baseString);
  
 }
  }

  handleReaderLoaded(e:any){
    this.baseString.push('data:image/png;base64,' + btoa(e.target.result));
    
     }

  productSubmit(){
    const obj = this.productForm.value;
    obj.img = this.baseString[0];
    this.http.sendData(obj).subscribe()
  }
}
