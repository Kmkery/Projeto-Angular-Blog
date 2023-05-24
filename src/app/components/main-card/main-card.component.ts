import { Component, OnInit, Input } from '@angular/core'
import { BlogDataService } from "../../services/blog-data.service"
import { Obj } from "../../shared/interfaces"

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})

export class MainCardComponent implements OnInit {
 
  lastArticle : Obj = {
    title: '', 
    imageLink: '', 
    alt: '', 
    preface: '', 
    text: ''
  }

  constructor(private service : BlogDataService) {}

  ngOnInit() : void {
    const allArticles = this.service.getData('last')

    this.lastArticle = allArticles[0]
    const limitString = `${this.lastArticle.preface.substring(0, 40)}...`
    if(this.lastArticle.preface.length > 40) {
      this.lastArticle.preface = limitString
    }
  }
}
