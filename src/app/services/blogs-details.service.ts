import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogsDetailsService {
  endpoint =environment.apiUrl;
  url=this.endpoint+'/get-blogs/';
  constructor(private http:HttpClient) { }
  blogData(slug:string){
    return this.http.get(this.url + slug);
  }
}
