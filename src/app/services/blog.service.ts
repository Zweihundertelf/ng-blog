import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private url = 'https://directus.flavore.de/items/articles';

  constructor(private http: HttpClient) {}

  getBlogPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
