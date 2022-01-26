import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: ()=> import('./home/home.module').then(modulo => modulo.HomeModule)
    },
    {
      path: 'posts',
      loadChildren: ()=> import('./posts/posts.module').then(modulo => modulo.PostsModule)
    }
  ]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
  export class AppRoutingModule {}