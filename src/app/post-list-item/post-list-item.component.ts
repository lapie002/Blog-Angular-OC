import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreated_at: string;

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if(this.postLoveIts > 0){
      return '#416A3F';
    } else if(this.postLoveIts < 0){
      return '#9D4B4B';
    }
  }

  loveIt(){
    this.postLoveIts++;
  }

  dontLoveIt(){
    this.postLoveIts--;
  }


}
