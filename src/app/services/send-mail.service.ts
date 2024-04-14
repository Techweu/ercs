import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  endpoint =environment.apiUrl;
  url=this.endpoint+'/send-mail';
  constructor(private http:HttpClient) {}
  sendMails(data:any){
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(this.url, data, {headers});
  }
}
