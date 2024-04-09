import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{CommonModule} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import {AuditsService} from '../../services/audits.service';
@Component({
  selector: 'app-audits',
  standalone: true,
  imports: [HttpClientModule,CommonModule,NgxPaginationModule],
  providers: [AuditsService],
  templateUrl: './audits.component.html',
  styleUrl: './audits.component.css'
})
export class AuditsComponent {
  auditsList:any;
  page:number=0;
  total:number=0;

  constructor(private audits:AuditsService){ } 

  ngOnInit(){
    this.getAudits();
  }
  getAudits(){
    this.audits.auditsData(this.page).subscribe((res:any)=>{
      this.auditsList=res;
      this.page=res.meta.current_page;
      this.total=res.meta.total;
    });
  }
  pageChangeEvent(event: number){
    this.page = event;
    this.getAudits();
  } 
}
