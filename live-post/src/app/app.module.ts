import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { PostEditComponent } from './post-edit/post-edit.component';

const routes:Routes = [
  {path:'',component:PostListComponent},
  {path:'auth',component:AuthComponent},
  {path:'post-list',component:PostListComponent},
  {path:'post-add',component:PostEditComponent},
  {path:':index/post-edit',component:PostEditComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    PostListComponent,
    PostComponent,
    PostEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
