import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { LoginDialogComponent } from '../../dialogs/login-dialog/login-dialog.component';
import { AuthService } from '../../services/auth/auth.service';
import { UserOptionDialogComponent } from '../user-option-dialog/user-option-dialog.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class AppHeaderComponent {

  constructor(public dialog: MatDialog, public auth: AuthService) { }

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

}