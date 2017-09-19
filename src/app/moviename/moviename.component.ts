import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviename',
  templateUrl: './moviename.component.html',
  styleUrls: ['./moviename.component.css']
})
export class MovienameComponent implements OnInit {
       movie = "";

  onKeyEnter(){
  
  }
  constructor() { }

  ngOnInit() {
  }

}
