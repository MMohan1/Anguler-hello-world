import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoursesService } from './courses.service';
import { AppComponent } from './app.component';
import { CoursesComponent } from './course.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
