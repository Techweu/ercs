import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QualityOrdersService {
  endpoint =environment.apiUrl
  url=this.endpoint+'/quality-control-orders';
  constructor(private http:HttpClient) { }
  qcoData(){
    return this.http.get(this.url);
  }
}
