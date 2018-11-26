import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';

import { MatToolbarModule } from '@angular/material/toolbar';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
    imports: [
        CommonModule,
        AlertModule.forRoot(),
        ButtonsModule.forRoot(),
        BsDropdownModule.forRoot(),
        MatToolbarModule,
        PerfectScrollbarModule
    ],
    exports: [AlertModule, ButtonsModule, BsDropdownModule, MatToolbarModule, PerfectScrollbarModule]
})
export class AppBootstrapModule { }