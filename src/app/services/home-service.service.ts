import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url='https://www.api.elitasrcs.com/api/v1/home';
  constructor(private http:HttpClient) { }
  data(){
    return this.http.get(this.url);
  }
}
