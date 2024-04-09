import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {ProductDetailsService} from '../../services/product-details.service';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  providers: [ProductDetailsService],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  slugId: any;
  product:any;
  content:any;
  excerpt:any;
 
  constructor(private route:ActivatedRoute, private service:ProductDetailsService, private sanitizer: DomSanitizer){}

  ngOnInit(): void  {
    this.slugId = this.route.snapshot.paramMap.get('slug');
    this.service.details(this.slugId)
        .subscribe((response: any) => {
         
          this.product = response;
          
          this.content = this.sanitizer.bypassSecurityTrustHtml(this.product.description);
          this.excerpt=this.sanitizer.bypassSecurityTrustHtml(this.product.short_description);
        });
  }
}
