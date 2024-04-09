import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url='https://www.api.elitasrcs.com/api/v1/get-service/';
  constructor(private http:HttpClient) { }
  serviceData(){
    return this.http.get(this.url);
  }
}
