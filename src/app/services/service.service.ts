import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  endpoint =environment.apiUrl;
  url=this.endpoint+'/get-service';
  constructor(private http:HttpClient) { }
   serviceData(){
    return this.http.get(this.url);
  }
}
