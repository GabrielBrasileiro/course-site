import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/common/services/course/course.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: any;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCoursesList();
  }

  getCoursesList() {
    this.courseService.getCoursesList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(courses => {
      this.courses = courses;
    });
  }

  deleteCourses() {
    this.courseService.deleteAll();
  }

}
