import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  endpoint =environment.apiUrl;
  url=this.endpoint+'/get-blogs';
  constructor(private http:HttpClient) { }
  blogsData(page:number){
    return this.http.get(this.url+'?page='+page);
  }
}
