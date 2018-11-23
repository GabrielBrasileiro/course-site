import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Course } from '../../models/course';
import { Constants } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private dbPath = Constants.COURSE_PATH;

  coursesRef: AngularFireList<Course> = null;

  constructor(private db: AngularFireDatabase) {
    this.coursesRef = db.list(this.dbPath);
  }

  createCourse(course: Course): void {
    this.coursesRef.push(course); 
  }

  updateCourse(key: string, value: any): void {
    this.coursesRef.update(key, value).catch(error => this.handleError(error));
  }

  deleteCourse(key: string): void {
    this.coursesRef.remove(key).catch(error => this.handleError(error));
  }

  getCoursesList(): AngularFireList<Course> {
    return this.coursesRef;
  }

  deleteAll(): void {
    this.coursesRef.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }

}
