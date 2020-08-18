import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from './post.service';
import { Post } from './post.model';
import {tap} from 'rxjs/operators'

@Injectable({providedIn:'root'})
export class DataStorageService
{
    constructor(private httpService:HttpClient,private postService:PostService)
    {}
 saveData()
 {
     //step 1
     const listOfPosts : Post[]= this.postService.getPosts();

     //step 2
      this.httpService.put('https://live-posts-2a8b1.firebaseio.com/posts.json',listOfPosts)
      .subscribe((res)=>{
          console.log(res);

      });
 }
 fetchData()
 {
     this.httpService.get('https://live-posts-2a8b1.firebaseio.com/posts.json').pipe(
         tap((listOfPosts: Post[])=>{
             this.postService.setPosts(listOfPosts);
         }))
     .subscribe();

 }
}