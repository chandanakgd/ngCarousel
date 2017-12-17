import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

//Third party imports
import { BsDropdownModule,CarouselModule} from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { SafePipe } from './utility/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoListComponent,
    VideoDetailsComponent,
    SafePipe
  ],
  imports: [
    //ngx-bootstrap
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),

    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
