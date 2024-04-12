import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceDetailsService {
  endpoint =environment.apiUrl;
  url=this.endpoint+'/get-service/';
  constructor(private http:HttpClient) { }
   details(slug:string){
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get(this.url + slug,{headers});
  }
}
