import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';

// RECOMMENDED
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxMasonryModule } from 'ngx-masonry';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgSelectModule } from '@ng-select/ng-select';

import { CreatePostComponent } from './create-post/create-post.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { ViewPostComponent } from './view-post/view-post.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPostsComponent,
    CreatePostComponent
  ],
  imports: [
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgxMasonryModule,
    FontAwesomeModule,
    NgSelectModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'create-post', component: CreatePostComponent},
      {path: 'view-post', component: ViewPostComponent},
      {path: '', component: AllPostsComponent},
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }