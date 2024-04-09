import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  url='https://www.api.elitasrcs.com/api/v1/footer';
  constructor(private http:HttpClient) { }
  footerData(){
    return this.http.get(this.url);
  }
}
