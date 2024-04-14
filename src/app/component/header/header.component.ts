import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{CommonModule} from '@angular/common';

import {ServiceService} from '../../services/service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  providers: [ServiceService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  serviceMenu:any;
  content:any;
   constructor(private service:ServiceService){
      
service.serviceData().subscribe((res)=>{
    
       this.serviceMenu=res;
       console.log('servicemenu',this.serviceMenu);
     });
  
     
   }
}
