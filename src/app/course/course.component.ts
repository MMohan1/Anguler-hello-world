import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
       title = "This is tile and we want to make it summarize so making a custom pipe";
       email="";
       imagePath = "http://lorempixel.com/400/200"
       isActive=true;
       onSave($event){
       console.log("Button was clicked", $event);
       }
       onKeyUp(){
       this.title = this.email;
       }
  constructor() { }

  ngOnInit() {
  }

}
