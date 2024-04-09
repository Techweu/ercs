import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  url='https://www.api.elitasrcs.com/api/v1/product-details/';
  constructor(private http:HttpClient) { }
  details(slug:string){
    return this.http.get(this.url + slug);
  }
}
