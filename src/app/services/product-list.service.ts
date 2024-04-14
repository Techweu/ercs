import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  url=environment+'/product-list/';
  constructor(private http:HttpClient) { }
  details(slug:string){
    return this.http.get(this.url + slug);
  }
}
