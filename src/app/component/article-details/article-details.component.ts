import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {ArticleDetailsService} from '../../services/article-details.service';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  providers:[ArticleDetailsService],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css'
})
export class ArticleDetailsComponent{
  slugId: any;
  article:any;
  content:any;
  post:any;
  all_categories:any;
  categoryslug:any;
 
  constructor(private route:ActivatedRoute, private service:ArticleDetailsService, private sanitizer: DomSanitizer){}

  ngOnInit(): void  {
    this.slugId = this.route.snapshot.paramMap.get('slug');
    this.service.articlesData(this.slugId)
        .subscribe((response: any) => {
          const data =response;
             this.article = data.article;
             this.categoryslug=data.article.category.slug;
             this.content = this.sanitizer.bypassSecurityTrustHtml(this.article.description);
             this.post =data.post;
             this.all_categories =data.all_categories;
             console.log('category slug',this.categoryslug);
        });
  }

  isSelected(slug:string):boolean{
    return this.categoryslug === slug;
  }

}
