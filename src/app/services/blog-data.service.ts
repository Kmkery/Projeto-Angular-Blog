import { Injectable } from '@angular/core'
import { Obj } from "../shared/interfaces"
import blog_data from "../../assets/data/blog_data.json"

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {
  // private lastToFirstArticleArray : Obj[] = []

  constructor() { }

  getData(option : string) : (Obj[]) {
    let arr =[...blog_data.articles].reverse() // organiza do mais recente para o mais antigo
    switch(option){
      case 'last':
        return [arr[0]]
      case 'others':
        arr.shift()
        return arr
      case 'all':
        return arr
      default:
        return [] 
    }
  }
}
