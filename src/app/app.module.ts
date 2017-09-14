import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoursesService } from './courses.service';
import { AppComponent } from './app.component';
import { CoursesComponent } from './course.component';
import { CourseComponent } from './course/course.component';
import { SummaryPipe } from './course/summary.pipe';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  CoursesService,
  AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
