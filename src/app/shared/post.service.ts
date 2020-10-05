import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Injectable({
  providedIn: 'root'
})

export class PostService {
  url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: HttpClient
  ) { }

  // Observable can handle async events (waiting for list of posts to return from api)
  // you're saying that the data you will get back will be an array of data with the Post structure
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}`);
  }
}
