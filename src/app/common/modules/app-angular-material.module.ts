import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatTabsModule,
        MatDialogModule,
        MatFormFieldModule
    ],
    exports: [
        BrowserAnimationsModule, 
        MatButtonModule, 
        MatCheckboxModule, 
        MatTabsModule, 
        MatDialogModule,
        MatFormFieldModule
    ]
})
export class AppAngularMaterialModule { }