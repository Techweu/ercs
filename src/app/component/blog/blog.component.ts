import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{CommonModule} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import {BlogsService} from '../../services/blogs.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HttpClientModule,CommonModule,NgxPaginationModule],
  providers:[BlogsService],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
blogList:any;
page: number= 0;
total: number = 0;
constructor(private blogs:BlogsService){    
  }
  ngOnInit() {
    this.getBlogs();
  }
  getBlogs(){
    this.blogs.blogsData(this.page).subscribe((res:any)=>{
      this.blogList=res;
      this.total = res.meta.total;
      this.page=res.meta.current_page;
    });
  } 
  pageChangeEvent(event: number){
    this.page = event;
    this.getBlogs();
  } 
}
