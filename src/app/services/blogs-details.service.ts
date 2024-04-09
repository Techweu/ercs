import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogsDetailsService {
  url='https://www.api.elitasrcs.com/api/v1/get-blogs/';
  constructor(private http:HttpClient) { }
  blogData(slug:string){
    return this.http.get(this.url + slug);
  }
}
