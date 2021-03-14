import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { EditorialComponent } from './components/editorial/editorial.component';
import { BookComponent } from './components/book/book.component';
import { DetailComponent } from './components/book/detail/detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: 'author', component: AuthorComponent },
  { path: 'editorial', component: EditorialComponent },
  { path: 'book', component: BookComponent },
  { path: 'detail', component: DetailComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
