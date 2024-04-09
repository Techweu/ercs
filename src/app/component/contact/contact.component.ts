import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule,FormGroup,FormControl,Validators} from '@angular/forms';
import {ServiceCategoryService} from '../../services/service-category.service';
import {SendMailService} from '../../services/send-mail.service';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers:[ServiceCategoryService, SendMailService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  categories:any;
  contactData:any;
  constructor(private service:ServiceCategoryService,private mail:SendMailService){
    
    this.service.category().subscribe((response)=>{
      this.categories = response;
    })
  }
  contactForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('', [Validators.required]),
    services:new FormControl("", [Validators.required]),
    message:new FormControl('',[Validators.required]),
  })

  sendData(){
    // console.log(this.contactForm.value);
    this.contactData=this.contactForm.value;
    this.mail.sendMails(this.contactData).subscribe((response)=>{
      console.log('message',response);
      this.contactForm.reset();
    });
  }

  get name(){
    return this.contactForm.get('name');
  }
  get email(){
    return this.contactForm.get('email');
  }
  get phone(){
    return this.contactForm.get('phone');
  }
  get services(){
    return this.contactForm.get('services');
  }
  get message(){
    return this.contactForm.get('message');
  }

}
