import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{CommonModule} from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import {QualityOrdersService} from '../../services/quality-orders.service';



@Component({
  selector: 'app-quality-control-orders',
  standalone: true,
  imports: [HttpClientModule,CommonModule,DataTablesModule],
  providers: [QualityOrdersService],
  templateUrl: './quality-control-orders.component.html',
  styleUrl: './quality-control-orders.component.css'
})
export class QualityControlOrdersComponent {
  qcolist:any;
 
   constructor(private qcoData:QualityOrdersService, private datatable:DataTablesModule){
     qcoData.qcoData().subscribe((res)=>{
       const qcos = res;
       this.qcolist=qcos;
       console.log(qcos);
     });
   } 
}
