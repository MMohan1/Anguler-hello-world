import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
       title = "List of Courses";
       imagePath = "http://lorempixel.com/400/200"
       isActive=true;
  constructor() { }

  ngOnInit() {
  }

}
