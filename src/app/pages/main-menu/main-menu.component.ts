import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from "@angular/material";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth/auth.service';
import { LoginDialogComponent } from 'src/app/common/dialogs/login-dialog/login-dialog.component';
import { UserOptionDialogComponent } from 'src/app/common/dialogs/user-option-dialog/user-option-dialog.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {

  constructor(public dialog: MatDialog, public auth: AuthService, private router: Router) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openUserDialog(): void {
    const dialogRef = this.dialog.open(UserOptionDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  logout() {
    this.auth.signOut();
  }

  openMyCourses() {
    this.router.navigate(["/dashboard"])
  }

  openUserSettings() {
    console.log('Open user settings page');
  }

}
