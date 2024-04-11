import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ProductListService} from '../../services/product-list.service';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  providers:[ProductListService],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent {
  slugId: any;
  productCategoryData:any;
  
 
  constructor(private route:ActivatedRoute, private service:ProductListService){}

  ngOnInit(): void  {
    this.slugId = this.route.snapshot.paramMap.get('slug');
    this.service.details(this.slugId)
        .subscribe((response: any) => {
            this.productCategoryData = response;
            //console.log('product List', this.productCategoryData);
                   
        });
  }
}
