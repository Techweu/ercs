import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  endpoint =environment.apiUrl;
  url=this.endpoint+'/get-articles';
  constructor(private http:HttpClient) { }
  articlesData(page:number){
    console.log('endpoint',this.endpoint);
    return this.http.get(this.url + '?page=' + page);
  }
  articlesbycat(id:number,slug:string,page:number){
    console.log('endpoint',this.endpoint);
    return this.http.get(this.endpoint+'/get-articles/'+id+'/'+slug+'?page='+page);
    //return this.http.get(this.url +'/'+id+'/'+slug +'?page=' + page);
  }
}
