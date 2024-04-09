import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleDetailsService {
  endpoint =environment.apiUrl;
  url=this.endpoint+'/get-articles/';
  constructor(private http:HttpClient) { }
  articlesData(slug:string){
    return this.http.get(this.url + slug);
  }
}
