import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuditsService {
  endpoint =environment.apiUrl;
  url=this.endpoint+'/get-audits';
  constructor(private http:HttpClient) { }
  auditsData(page:number){
    return this.http.get(this.url+'?page='+page);
  }
}
