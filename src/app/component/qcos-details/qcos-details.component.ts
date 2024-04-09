import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {QcosDetailsService} from '../../services/qcos-details.service';

@Component({
  selector: 'app-qcos-details',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  providers:[QcosDetailsComponent],
  templateUrl: './qcos-details.component.html',
  styleUrl: './qcos-details.component.css'
})
export class QcosDetailsComponent {
  slugId: any;
  qco:any;
  content:any;
 
  constructor(private route:ActivatedRoute, private service:QcosDetailsService, private sanitizer: DomSanitizer){}

  ngOnInit(): void  {
    this.slugId = this.route.snapshot.paramMap.get('slug');
    this.service.qcoData(this.slugId)
        .subscribe((response: any) => {
        
          this.qco = response;
         
          this.content = this.sanitizer.bypassSecurityTrustHtml(this.qco.content);
        });
  }
}
