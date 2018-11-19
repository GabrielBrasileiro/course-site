import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from 'src/app/common/services/course/course.service';
import { Course } from 'src/app/common/models/course';

@Component({
  selector: 'course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  @Input() course: Course;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.courseService.updateCourse(this.course.key, { active: isActive });
  }

  deleteCourse() {
    this.courseService.deleteCourse(this.course.key);
  }

}
