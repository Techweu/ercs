import { Component, numberAttribute } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {ArticlesService} from '../../services/articles.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [HttpClientModule,CommonModule,NgxPaginationModule],
  providers: [ArticlesService],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  articlesList:any;
  page: number= 1;
  total: number = 0;
  id:any;
  slug:any;
  all_category:any;
  post:any;
  category:string="All Article";
  catslug:any;

  
 
  //  constructor(private articles:ArticlesService){
  //    articles.articlesData().subscribe((res)=>{
  //      console.log("responce",res)
  //      this. articlesList=res;
  //    });
  //  } 

  constructor(private route:ActivatedRoute,private service:ArticlesService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const slug = this.route.snapshot.paramMap.get('slug');
    if (id !== null && id !== undefined && slug !== null && slug !==undefined) {
      this.id=id;
      this.slug=slug;
      this.getArticlesBycategory(Number(id),slug);
      console.log('ID parameter is set:', id);
    } else {
      // 'id' parameter is not set
      this.getArticles();
      console.log('ID parameter is not set');
    }
    
  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  getArticles(){
      this.service.articlesData(this.page)
        .subscribe((response: any) => {
          console.log("responce",response.data)
          this.articlesList = response.articles;
          this.total = response.articles.total;
          this.page=response.articles.current_page;
          this.all_category = response.all_categories;
          this.post =response.post;
        });
  } 

  getArticlesBycategory(id:number,slug:string){
    this.service.articlesbycat(id,slug,this.page)
        .subscribe((response: any) => {
          console.log("responce",response)
          this.articlesList = response.articles;
          this.total = response.articles.total;
          this.page=response.articles.current_page;
          this.all_category = response.all_categories;
          this.post =response.post;
          this.category = response.articles.data[0].category.title;
        });

  }

  pageChangeEvent(event: number){
    this.page = event;
    if(this.id && this.slug){
      this.getArticlesBycategory(this.id,this.slug);
    }else{
      this.getArticles();

    }
  }
  isSelected(catslug:String):Boolean{
    console.log('this.category',this.category);
    console.log('catslug',catslug);
    return this.slug === catslug;
  }
}
