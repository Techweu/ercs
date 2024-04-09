import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {BlogsDetailsService} from '../../services/blogs-details.service';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  providers:[BlogsDetailsService],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent {
  slugId: any;
  post:any;
  content:any;
  excerpt:any;
  all_categories:any;
  latest_posts:any;

 
  constructor(private route:ActivatedRoute, private service:BlogsDetailsService, private sanitizer: DomSanitizer){}

  ngOnInit(): void  {
    this.slugId = this.route.snapshot.paramMap.get('slug');
    this.service.blogData(this.slugId)
        .subscribe((response: any) => {
          this.post = response.post;
          this.content = this.sanitizer.bypassSecurityTrustHtml(this.post.description);
          this.excerpt=this.sanitizer.bypassSecurityTrustHtml(this.post.excerpt);
          this.all_categories=response.all_category;
          this.latest_posts=response.latest_post;
        });
  }

  isSelected(slug:String):Boolean{
    return this.post.category.slug === slug;
  }
}
