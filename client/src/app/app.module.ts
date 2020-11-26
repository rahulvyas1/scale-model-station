import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// RECOMMENDED
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TabsModule } from 'ngx-bootstrap/tabs';

// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxMasonryModule } from 'ngx-masonry';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgSelectModule } from '@ng-select/ng-select';

import { CreatePostComponent } from './create-post/create-post.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { GridGalleryComponent } from './grid-gallery/grid-gallery.component';
import { GridGalleryItemComponent } from './grid-gallery/grid-gallery-item/grid-gallery-item.component';


import {
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    AllPostsComponent,
    CreatePostComponent,
    GridGalleryComponent,
    GridGalleryItemComponent
  ],
  imports: [
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    SlickCarouselModule,
    NgxMasonryModule,
    FontAwesomeModule,
    NgSelectModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'create-post', component: CreatePostComponent},
      {path: 'view-post', component: ViewPostComponent},
      {path: '', component: AllPostsComponent},
    ]),
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
