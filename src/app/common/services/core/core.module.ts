import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth.service';
import { NotifyService } from '../notify/notify.service';

@NgModule({
  providers: [AuthService, NotifyService]
})
export class CoreModule { }
