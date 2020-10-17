import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { GallaryComponent } from './public/gallary/gallary.component';
import { BlogComponent } from './public/blog/blog.component';
import { EventsComponent } from './public/events/events.component';
import { ContactComponent } from './public/contact/contact.component';

const routes: Routes = [
  { path: '',  redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', pathMatch: 'full', component: HomeComponent},
  { path: 'gallary', pathMatch: 'full', component: GallaryComponent},
  { path: 'blog', pathMatch: 'full', component: BlogComponent},
  { path: 'events', pathMatch: 'full', component: EventsComponent},
  { path: 'contact', pathMatch: 'full', component: ContactComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
