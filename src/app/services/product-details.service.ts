import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  endpoint =environment.apiUrl;
  url=this.endpoint+'/product-details/';
  constructor(private http:HttpClient) { }

  details(slug:string){
    return this.http.get(this.url + slug);
  }
}
