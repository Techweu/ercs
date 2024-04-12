import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{CommonModule} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import {ServiceService} from '../../services/service.service';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HttpClientModule,CommonModule,NgxPaginationModule],
  providers:[ServiceService],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services:any;
  page: number= 0;
  total: number = 0;

  constructor(private http:HttpClientModule,private service:ServiceService){
    this.fetchData();
  }
  fetchData(){
    this.service.list(this.page).subscribe((response)=>{
         this.services = response;
         this.total = this.services.total;
         this.page=this.services.current_page;
               
    });
  }

  pageChangeEvent(event: number){
    this.page = event;
    this.fetchData();
  } 

}
