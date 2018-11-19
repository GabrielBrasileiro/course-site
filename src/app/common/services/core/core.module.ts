import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth.service';
import { NotifyService } from '../notify/notify.service';
import { CourseService } from '../course/course.service';

@NgModule({
  providers: [AuthService, NotifyService, CourseService]
})
export class CoreModule { }
