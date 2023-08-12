import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-profilenavbar',
  templateUrl: './profilenavbar.component.html',
  styleUrls: ['./profilenavbar.component.scss']
})
export class ProfilenavbarComponent {

  constructor(private store:StoreService, private route: Router, private aroute:ActivatedRoute){}
  logedout(){
    this.store.getDestroy();
    this.route.navigate(['/'],{
      queryParams:{returnUrl:this.aroute.url}
    })
  }
}
