import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { GallaryComponent } from './public/gallary/gallary.component';
import { BlogComponent } from './public/blog/blog.component';
import { EventsComponent } from './public/events/events.component';
import { ContactComponent } from './public/contact/contact.component';
import { BlogFirstComponent } from './public/blogs/blog-first/blog-first.component';
import { BlogSecondComponent } from './public/blogs/blog-second/blog-second.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GallaryComponent,
    BlogComponent,
    EventsComponent,
    ContactComponent,
    BlogFirstComponent,
    BlogSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
