import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogService } from '@services/blog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  blogPosts: any[] = [];
  private blogSubscription: Subscription | undefined;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogPosts().subscribe(
      (data: any) => {
        this.blogPosts = data.data;
      },
      (error) => {
        console.error('Fehler beim Laden der Blog-Posts:', error);
      },
    );
  }
}
