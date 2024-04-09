import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import {ServiceCategoryService} from '../../services/service-category.service';
import {SendMailService} from '../../services/send-mail.service';
import { response } from 'express';

@Component({
  selector: 'app-request-quote',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule],
  providers:[ServiceCategoryService,SendMailService],
  templateUrl: './request-quote.component.html',
  styleUrl: './request-quote.component.css'
})

export class RequestQuoteComponent {
  categories:any;
  enquiryData:any;

  constructor(private service:ServiceCategoryService , private mail:SendMailService){
   
      this.service.category().subscribe((response)=>{
        this.categories = response;
      })
  }

  requestQForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    services:new FormControl('',[Validators.required]),
    message:new FormControl('',[Validators.required]),

  });
  
 sendData(){
    
    this.enquiryData=this.requestQForm.value;
    this.mail.sendMails(this.enquiryData).subscribe((response)=>{
      console.log('message',response);
      this.requestQForm.reset();
    });
  }
  
  get name(){
    return this.requestQForm.get('name');
  }
  get email(){
    return this.requestQForm.get('email');
  }
  get services(){
    return this.requestQForm.get('services');
  }
  get message(){
    return this.requestQForm.get('message');
  }
}
