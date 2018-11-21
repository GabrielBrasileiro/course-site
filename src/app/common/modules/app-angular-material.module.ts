import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatTabsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatCardModule,
        FormsModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatInputModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatTabsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatCardModule,
        FormsModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatInputModule
    ]
})
export class AppAngularMaterialModule { }