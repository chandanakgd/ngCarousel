import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'
@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title="Video List";
  videoList=[
    {
      name:"Item 1",
      slug:'Item-1',
      embed:`xmU0s2QtaEY`
    },
    {
      name:"Item 2",
      slug:"Item-2",
      embed:`SAcpESN_Fk4`
    },
    {
      name:"Item 3",
      slug:"Item-3",
      embed:`1hyjLD7pk10`
    }
  ]
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
  }
  getEmbedUrl(item){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+item.embed)
  }

}
