import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{CommonModule} from '@angular/common';
import {QualityOrdersService} from '../../services/quality-orders.service';

@Component({
  selector: 'app-quality-control-orders',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  providers: [QualityOrdersService],
  templateUrl: './quality-control-orders.component.html',
  styleUrl: './quality-control-orders.component.css'
})
export class QualityControlOrdersComponent {
  qcolist:any;
 
   constructor(private qcoData:QualityOrdersService){
     qcoData.qcoData().subscribe((res)=>{
       
       this.qcolist=res;
     });
   } 
}
