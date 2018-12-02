import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth.service';
import { NotifyService } from '../notify/notify.service';
import { CourseService } from '../course/course.service';
import { User } from '../../models/user';
import { AuthGuard } from '../auth/auth.guard';
import { UserService } from '../user/user.service';

@NgModule({
  providers: [
    AuthService, 
    NotifyService, 
    CourseService, 
    UserService, 
    AuthGuard
  ]
})
export class CoreModule { }
