import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostContentComponent } from './post-content/post-content.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { PostsRoutingModule } from './posts-routing.module';



@NgModule({
  declarations: [
    PostsListComponent,
    PostContentComponent
  ],
  imports: [
    CommonModule,
    ScullyLibModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
