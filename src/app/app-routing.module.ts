import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { ContentComponent } from './pages/content/content.component'
import { ArticlesListComponent } from './pages/articles-list/articles-list.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'content/:title', component: ContentComponent},
  {path: 'articles', component: ArticlesListComponent},
  {path: 'articles/content/:title', component: ContentComponent},
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
