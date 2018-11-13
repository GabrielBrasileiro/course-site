import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppHeaderComponent } from './common/components/header/header.component';
import { AppFooterComponent } from './common/components/footer/footer.component';

import { AppBootstrapModule } from './common/modules/app-bootstrap.module';
import { AppAngularMaterialModule } from './common/modules/app-angular-material.module';

import { CoreModule } from './common/services/core/core.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { environment } from 'src/environments/environment';

import { TabComponent } from './common/components/tab/tab.component';
import { LoginDialogComponent } from './common/dialogs/login-dialog/login-dialog.component';
import { MycoursesComponent } from './common/components/mycourses/mycourses.component';
import { NotFoundComponent } from './common/components/not-found/not-found.component';
import { SubBannerComponent } from './common/components/sub-banner/sub-banner.component';
import { BodyComponent } from './common/components/body/body.component';
import { CardCourseComponent } from './common/components/cards/card-course/card-course.component';
import { ProgressBarComponent } from './common/components/progress-bar/progress-bar.component';
import { UserOptionDialogComponent } from './common/components/user-option-dialog/user-option-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    TabComponent,
    LoginDialogComponent,
    MycoursesComponent,
    NotFoundComponent,
    SubBannerComponent,
    BodyComponent,
    CardCourseComponent,
    ProgressBarComponent,
    UserOptionDialogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AppAngularMaterialModule,
    AppBootstrapModule,
    AngularFireModule.initializeApp(environment.firebase, 'firestarter'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule
  ],
  entryComponents: [LoginDialogComponent],  
  bootstrap: [AppComponent]
})
export class AppModule { }
