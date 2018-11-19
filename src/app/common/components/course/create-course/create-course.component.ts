import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/common/models/course';
import { CourseService } from 'src/app/common/services/course/course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {

  course: Course = new Course();
  submitted = false;
 
  constructor(private courseService: CourseService) { }

  newCourse(): void {
    this.submitted = false;
    this.course = new Course();
  }
 
  save() {
    this.courseService.createCourse(this.course);
    this.course = new Course();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
