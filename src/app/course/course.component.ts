import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
       title = "This is tile and we want to make it summarize so making a custom pipe";
       email="";
       startClass="glyphicon glyphicon-star-empty";
       imagePath = "http://lorempixel.com/400/200"
       isActive=true;
       isStartClicked=true;
       onSave($event){
       console.log("Button was clicked", $event);
       }
       onKeyUp(){
       this.title = this.email;
       }
       onSpanClick(){
                this.isStartClicked = !this.isStartClicked;
                this.startClass=(this.startClass == "glyphicon glyphicon-star-empty" ? "glyphicon glyphicon-star": "glyphicon glyphicon-star-empty");
                /**
                if(this.startClass === "glyphicon glyphicon-star-empty"){
                        this.startClass = "glyphicon glyphicon-star";                
                                }
                else {
                this.startClass = "glyphicon glyphicon-star-empty";
                }
                */
       }
  constructor() { }

  ngOnInit() {
  }

}
