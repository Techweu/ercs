import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  url='https://www.api.elitasrcs.com/api/v1/send-mail';
  constructor(private http:HttpClient) {}
  sendMails(data:any){
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(this.url, data, {headers});
  }
}
