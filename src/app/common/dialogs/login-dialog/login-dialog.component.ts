import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../../services/auth/auth.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

  constructor(
    public auth: AuthService,
    private router: Router,
    public dialogRef: MatDialogRef<LoginDialogComponent>) { }

  async signInWithGoogle() {
    await this.auth.googleLogin();
    this.closeDialog();
    return await this.afterSignIn();
  }

  private afterSignIn() {
    return this.router.navigate(['/']);
  }

  private closeDialog() {
    this.dialogRef.close();
  }

}
