import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  endpoint =environment.apiUrl;
  url=this.endpoint+'/home';
  constructor(private http:HttpClient) { }
   data(){
    return this.http.get(this.url);
  }
}
