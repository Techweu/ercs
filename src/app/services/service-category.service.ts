import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceCategoryService {
  url='https://www.api.elitasrcs.com/api/v1/get-service-categories';
  constructor(private http:HttpClient) { }
  category(){
    return this.http.get(this.url);
  }
}
