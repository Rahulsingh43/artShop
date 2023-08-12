import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.scss']
})
export class SimilarComponent {
@Input() similarData:any;
@Output() sentId = new EventEmitter()
constructor(private router:Router){}

sentData(id:any, val:any){

  this.sentId.emit(id)
this.router.navigate(['/detail',id, val])
}



}
