import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostContentComponent } from "./post-content/post-content.component";
import { PostsListComponent } from "./posts-list/posts-list.component";

const routes : Routes = [
    {
        path: '',
        component: PostsListComponent
    },
    {
        path: ':postId',
        component: PostContentComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PostsRoutingModule {}