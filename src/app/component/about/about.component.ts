import { Component } from '@angular/core';
import { RequestQuoteComponent } from '../request-quote/request-quote.component';
import {Title,Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(
    private title:Title,
    private meta:Meta
  ){}

  ngOnInit(){
    this.title.setTitle('ERCS -About');
  }
}
