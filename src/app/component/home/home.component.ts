import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{CommonModule} from '@angular/common';
import { DomSanitizer, Title,Meta} from '@angular/platform-browser';
import {HomeService} from '../../services/home-service.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  providers: [HomeService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    
 homedata:any;
 content:any;
  constructor(private sanitizer: DomSanitizer, 
    private title:Title,
    private meta:Meta,
    private homeData:HomeService){
    homeData.data().subscribe((res)=>{
     console.log('data',res)
      this.homedata=res;
    });
    
    this.content = this.sanitizer.bypassSecurityTrustHtml(this.homedata.about.desc);
    this.title.setTitle("ERCS - BIS Certification India, ISI Mark Certification India, WPC Approval Consultant India");
    this.meta.addTag({name:"tags",content:"BIS Certification, ISI Certification, ISI Mark, BIS Registration, WPC Approval, BEE Star Rating,BEE Registration,ERP Registration,AIS License"});
    this.meta.addTag({name:"description",content:"ERCS has top BIS Certification Consultant in India and also provides quick ISI Mark certification, BIS Registration, WPC Approval and BEE Registration Services in India."});
    
  }

}
