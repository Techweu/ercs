import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  endpoint =environment.apiUrl;
  url=this.endpoint+'/footer';
  constructor(private http:HttpClient) { }
   footerData(){
    return this.http.get(this.url);
  }
}
