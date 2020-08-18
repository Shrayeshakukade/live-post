import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import {PostService} from '../post.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit { 
 listOfPosts: Post[]=[];
  constructor(private postservice:PostService) { }

  ngOnInit(): void {
    this.postservice.listChanged.subscribe((listOfPosts:Post[])=>{
      this.listOfPosts=listOfPosts;
    });
    this.listOfPosts=this.postservice.getPosts();
  }

}
