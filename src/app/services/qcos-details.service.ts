import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QcosDetailsService {
  url='https://www.api.elitasrcs.com/api/v1/quality-control-orders/';
  constructor(private http:HttpClient) { }
  qcoData(slug:string){
    return this.http.get(this.url + slug);
  }
}
