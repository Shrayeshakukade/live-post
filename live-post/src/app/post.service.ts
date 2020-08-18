import {Post} from './post.model';
import {Injectable} from '@angular/core'
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService{
   listChanged= new Subject<Post[]>();
    listOfPosts : Post[]= [
         /*new Post('World Ocean Day ',
         `World Oceans Day is an international day that takes place annually on 8 June.The concept was originally proposed in 1992
          by Canada's International Centre for Ocean Development and the Ocean Institute of Canada at the Earth Summit– UN Conference 
          on Environment and Development in Rio de Janeiro, Brazil.
         `,
          'https://www.ecomagazine.com/images/Newsletter/0_2019/Week_11-18-19/birdseyeview_ocean.jpg',' vishakhakokate@gmail.com',
          new Date() 
          ),
          new Post(
            'Rivers',
          ` A river is a natural flowing watercourse, usually freshwater, flowing towards an ocean, 
            sea, lake or another river. In some cases a river flows into the ground and becomes dry 
            at the end of its course without reaching another body of water.
          `,
          'https://cff2.earth.com/uploads/2018/01/08145353/Freshwater-streams-and-rivers-are-being-polluted-with-salt.jpg','vishakhakokate@gmail.com',
          new Date()
           ),
        new Post('Nature' ,
        `"Nature" refers to the phenomena of the physical world, and also to life in general. ...
         The term is often refers to the "natural environment" or wilderness—wild animals, rocks, 
         forest, beaches, and in general areas that have 
        not been substantially altered by humans, or which persist despite human intervention.
        `,
        'https://m.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/04/02/Pictures/conducted-collaboration-experiment-participants-environments-artificial-listened_5e43e23c-178a-11e7-9d7a-cd3db232b835.jpg',' vishakhakokate@gmail.com',
         new Date() 
         )
         */
         ];
         addPost(post:Post)
         {
           this.listOfPosts.push(post);
         }
         updatePost(index:number,post:Post)
         {
          this.listOfPosts[index]=post;
         }
         deletePost(index:number)
         {
           this.listOfPosts.splice(index,1);
         }

         getPosts()
         {
           return this.listOfPosts;
         }
         getPost(index:number)
         {
           return this.listOfPosts[index];
         }
         setPosts(listOfPosts:Post[])
         {
           if(listOfPosts){
           this.listOfPosts=listOfPosts;
          }
          else{
            this.listOfPosts = [];
          }
           this.listChanged.next(this.listOfPosts);
         }
}