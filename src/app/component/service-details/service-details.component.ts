import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {ReactiveFormsModule,FormGroup,FormControl,Validators} from '@angular/forms';
import {ServiceDetailsService} from '../../services/service-details.service';
import {SendMailService} from '../../services/send-mail.service';


@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [HttpClientModule,CommonModule,ReactiveFormsModule],
  providers: [ServiceDetailsService,SendMailService],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent {
  slugId: any;
  all_services:any;
  serviceData:any;
  content:any;
  excerpt:any;
  queryData:any;
 
  constructor(private route:ActivatedRoute, private service:ServiceDetailsService,private mail:SendMailService, private sanitizer: DomSanitizer){}

  ngOnInit(): void  {
    this.slugId = this.route.snapshot.paramMap.get('slug');
    this.service.details(this.slugId)
        .subscribe((response: any) => {
          const data =response
          this.serviceData = data.service;
          this.all_services = data.all_services;
          this.content = this.sanitizer.bypassSecurityTrustHtml(this.serviceData.description);
          this.excerpt=this.sanitizer.bypassSecurityTrustHtml(this.serviceData.excerpt);
        });
  }
  queryForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('', [Validators.required]),
    services:new FormControl("", [Validators.required]),
    message:new FormControl('',[Validators.required]),
  })

  sendData(){
    // console.log(this.contactForm.value);
    this.queryData=this.queryForm.value;
    this.mail.sendMails(this.queryData).subscribe((response)=>{
      console.log('message',response);
      this.queryForm.reset();
    });
  }
  isSelected(item:string):boolean{
    return item === this.slugId;
  }


}
