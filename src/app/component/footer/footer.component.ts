import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule,FormGroup,FormControl,Validators} from '@angular/forms';
import { RequestQuoteComponent } from '../request-quote/request-quote.component';
import {FooterService} from '../../services/footer.service';
import {SendMailService} from '../../services/send-mail.service'


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,HttpClientModule, ReactiveFormsModule, RequestQuoteComponent],
  providers:[FooterService,SendMailService],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footer:any;
  enquiryData:any;
  constructor(private service:FooterService,private mail:SendMailService){
                
      service.footerData().subscribe((res)=>{
         this.footer=res;
         console.log('footer',this.footer);
      });
     
  }
  enquiryForm = new FormGroup({
    name:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required,Validators.email]),
    phone:new FormControl('', [Validators.required]),
    services:new FormControl("", [Validators.required]),
    message:new FormControl('', [Validators.required]),
  })

  sendData(){
    console.log(this.enquiryForm.value);
     // console.log(this.contactForm.value);
     this.enquiryData=this.enquiryForm.value;
     this.mail.sendMails(this.enquiryData).subscribe((response)=>{
       console.log('message',response);
       this.enquiryForm.reset();
     });
  }

  get name(){
    return this.enquiryForm.get('name');
  }
  get email(){
    return this.enquiryForm.get('email');
  }
  get phone(){
    return this.enquiryForm.get('phone');
  }
  get services(){
    return this.enquiryForm.get('services');
  }
  get message(){
   return this.enquiryForm.get('message');
  }

  
}
