import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Painting } from 'src/app/class/painting';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.scss']
})
export class ProducteditComponent implements OnInit{
  data!:any;
  filterData!: any;
  inputData!: string;
  page: number = 1;

  imgData!:any;
  myImage!:any;
  baseString:any[] = [];
  id!:any;
  productForm!: FormGroup;

  constructor(private http: HttpService, private fb: FormBuilder, private ActiveRoute:ActivatedRoute, private route:Router) {}
  ngOnInit(): void {
    this.http.getData().subscribe((res) => {
      this.data = res;
    });

    this.ActiveRoute.paramMap.subscribe((res)=>{
      this.id = res.get('id');
      });
      this.http.getDetail(this.id).subscribe((res)=>{
        this.data = res; 
      },(err)=>{
        const error = err
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
      img: ['',Validators.required]
    })
  }

  productSubmit(){
    const edited_data = {
     category: (this.productForm.value.category == '') ? this.data?.category : this.productForm.value.category,
     title: (this.productForm.value.title == '') ? this.data?.title : this.productForm.value.title,
     size: (this.productForm.value.size == '') ? this.data?.size : this.productForm.value.size,
     price: (this.productForm.value.price == '') ? this.data?.price : this.productForm.value.price,
     percent: (this.productForm.value.percent == '') ? this.data?.percent : this.productForm.value.percent,
     desc: (this.productForm.value.desc == '') ? this.data?.desc : this.productForm.value.desc,
     shape: (this.productForm.value.shape == '') ? this.data?.shape : this.productForm.value.shape,
     artist: (this.productForm.value.artist == '') ? this.data?.artist : this.productForm.value.artist,
     medium: (this.productForm.value.medium == '') ? this.data?.medium : this.productForm.value.medium,
     return: (this.productForm.value.return == '') ? this.data?.return : this.productForm.value.return,
     img: (this.productForm.value.img == '') ? this.data?.img : this.productForm.value.img,
    }

    this.http.updateData(this.id, edited_data).subscribe(()=>{
      
    })

 this.route.navigate(['/admin/products'])
  }
}
