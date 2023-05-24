import { Component, OnInit, Input } from '@angular/core'
import { BlogDataService } from "../../services/blog-data.service"
import { Obj } from "../../shared/interfaces"

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
 
  @Input() context : string = ''

  otherArticles : Obj[] = [{
    title: '', 
    imageLink: '', 
    alt: '', 
    preface: '', 
    text: ''
  }]

  constructor(private service : BlogDataService) {}
  ngOnInit() : void {
    const homeSmallCardContext = document.querySelector('#container__small-cards')

    if(this.context === 'home') {
      this.otherArticles = this.service.getData('others')
      homeSmallCardContext?.classList.add('homePageMediaQuery')

    } else if(this.context === 'articles_list') {
      this.otherArticles = this.service.getData('all')
      homeSmallCardContext?.classList.remove('homePageMediaQuery')
    }
  }
}
    
  
