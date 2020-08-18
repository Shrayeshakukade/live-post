import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  postForm: FormGroup;
  index: number;
  constructor(private postService: PostService,
    private routerService: Router,
    private routeService: ActivatedRoute) { }

  ngOnInit(): void {
    let title: string = "";
    let desc: string = "";
    let imagePath: string = "";

    this.routeService.params.subscribe((params: Params) => {
      this.index = params['index'];
      if (this.index) {
       
        const post: Post = this.postService.getPost(this.index);
        title = post.title;
        desc = post.desc;
        imagePath = post.imagePath;
      }
    });

    this.postForm = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      desc: new FormControl(desc, [Validators.required, Validators.minLength(10)]),
      imagePath: new FormControl(imagePath, [Validators.required])
    });
  }
  onSubmit() { //get data from form and create object
    const ob: Post = new Post(
      this.postForm.value.title,
      this.postForm.value.desc,
      this.postForm.value.imagePath,
      'vishakhakokate@gmail.com',
      new Date()
    );
    //store in postservice
    if (this.index) {
      this.postService.updatePost(this.index, ob);
    }
    else {
      this.postService.addPost(ob);
    }
    //routing to post-list route
    this.routerService.navigate(['post-list']);
  }
}
