import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ProductListService} from '../../services/product-list.service';

import { DataTablesModule } from 'angular-datatables';


@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [HttpClientModule,CommonModule,DataTablesModule],
  providers:[ProductListService],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent {
  slugId: any;
  productCategoryData:any;
  category:any;

  constructor(private route:ActivatedRoute, private service:ProductListService){}
  
  ngOnInit(): void  {
    
    this.slugId = this.route.snapshot.paramMap.get('slug');
    this.getProduct();
  }

 async getProduct(){
   await this.service.details(this.slugId)
    .subscribe((response: any) => {
        this.productCategoryData = response.all_products;
        this.category =response.category;
        console.log('product List', this.productCategoryData);
               
    });
  }
}
