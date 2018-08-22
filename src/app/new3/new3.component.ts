import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new3',
  templateUrl: './new3.component.html',
  styleUrls: ['./new3.component.css']
})
export class New3Component implements OnInit {
  title: string;
  h:string[];

  constructor() {
    this.title = "12312321";
    this.h = ['haha','123','women'];
  }
  ngOnInit() {
    console.log('new3 component init')
  }
  clickBtn(b){ 
     this.title = '好人好人啊'
     this.h[1] = this.title
     console.log(b)
  }
}
