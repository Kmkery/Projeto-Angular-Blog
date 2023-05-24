import { Component, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data.service';
import { Obj } from 'src/app/shared/interfaces';


@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articlesList : Obj[] = [{
    title: '', 
    imageLink: '', 
    alt: '', 
    preface: '', 
    text: ''
  }]

  constructor(private service : BlogDataService) {}

  ngOnInit() : void {
    this.articlesList = this.service.getData('all')
  }
}
