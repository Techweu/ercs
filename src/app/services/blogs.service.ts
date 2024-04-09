import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  url='https://www.api.elitasrcs.com/api/v1/get-blogs';
  constructor(private http:HttpClient) { }
  blogsData(page:number){
    return this.http.get(this.url+'?page='+page);
  }
}
