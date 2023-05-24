import { Component, OnInit } from '@angular/core'
import  { BlogDataService } from "../../services/blog-data.service"
import { Obj } from 'src/app/shared/interfaces'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private title : string | null = ''
  articleContent : Obj = {title: '', imageLink: '', alt: '', preface: '', text: ''}

  constructor(
    private service : BlogDataService,
    private route : ActivatedRoute
  ) {}

  setPropertiesValuesToComponent(title : string | null) {
    const componentProps = this.service.getData('all')
    this.articleContent = componentProps.filter(value => value.title === title)[0] 
  }

  ngOnInit() : void {
    this.route.paramMap.subscribe(value =>
      this.title = value.get("title")
    )
    
    this.setPropertiesValuesToComponent(this.title)  
  }
}
