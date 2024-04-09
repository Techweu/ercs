import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuditsService {
  url='https://www.api.elitasrcs.com/api/v1/get-audits';
  constructor(private http:HttpClient) { }
  auditsData(page:number){
    return this.http.get(this.url+'?page='+page);
  }
}
