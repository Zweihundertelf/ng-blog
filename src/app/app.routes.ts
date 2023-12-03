import { Routes } from '@angular/router';
import { BlogPostComponent } from '@modules/blog-post/blog-post.component';
import { BlogComponent } from '@modules/blog/blog.component';
import { HomeComponent } from '@modules/home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog/:slug',
    component: BlogPostComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
