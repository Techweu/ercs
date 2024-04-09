import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  url='https://www.api.elitasrcs.com/api/v1/get-articles';
  constructor(private http:HttpClient) { }
  articlesData(page:number){
    return this.http.get(this.url + '?page=' + page);
  }
  articlesbycat(id:number,slug:string,page:number){
    
    return this.http.get('https://www.api.elitasrcs.com/api/v1/get-articles/'+id+'/'+slug+'?page='+page);
    //return this.http.get(this.url +'/'+id+'/'+slug +'?page=' + page);
  }
}
