import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleDetailsService {

  url='https://www.api.elitasrcs.com/api/v1/get-articles/';
  constructor(private http:HttpClient) { }
  articlesData(slug:string){
    return this.http.get(this.url + slug);
  }
}
