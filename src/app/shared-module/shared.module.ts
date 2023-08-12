import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentagePipe } from '../customPipe/percentage.pipe';
import { AddPipe } from '../customPipe/add.pipe';
import { AccordianComponent } from '../components/accordian/accordian.component';



@NgModule({
  declarations: [PercentagePipe,AddPipe,AccordianComponent],
  imports: [
    CommonModule
  ],
  exports:[PercentagePipe,AddPipe,CommonModule,AccordianComponent]
})
export class SharedModule { }
