import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// import { AppHeaderComponent } from './common/components/header/header.component';
// import { AppFooterComponent } from './common/components/footer/footer.component';

import { AppBootstrapModule } from './common/modules/app-bootstrap.module';
import { AppAngularMaterialModule } from './common/modules/app-angular-material.module';

import { CoreModule } from './common/services/core/core.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { environment } from 'src/environments/environment';

import { TabComponent } from './common/components/tab/tab.component';
import { LoginDialogComponent } from './common/dialogs/login-dialog/login-dialog.component';
import { MycoursesComponent } from './common/components/mycourses/mycourses.component';
import { NotFoundComponent } from './common/components/not-found/not-found.component';
import { SubBannerComponent } from './common/components/sub-banner/sub-banner.component';
import { BodyComponent } from './common/components/body/body.component';
import { CardCourseComponent } from './common/components/cards/card-course/card-course.component';
import { ProgressBarComponent } from './common/components/progress-bar/progress-bar.component';
import { CourseDetailsComponent } from './common/components/course/course-details/course-details.component';
import { CourseListComponent } from './common/components/course/course-list/course-list.component';
import { CreateCourseComponent } from './common/components/course/create-course/create-course.component';
import { UserOptionDialogComponent } from './common/components/user-option-dialog/user-option-dialog.component';
import { UserDetailsFormComponent } from './common/components/forms/user-details-form/user-details-form.component';
import { CourseFormComponent } from './common/components/forms/course-form/course-form.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';

import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = { suppressScrollX: true };

const APP_CONTAINERS = [DefaultLayoutComponent];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    CoreModule,
    AppAngularMaterialModule,
    AppBootstrapModule,
    AngularFireModule.initializeApp(environment.firebase, 'firestarter'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    MainMenuComponent,
    TabComponent,
    LoginDialogComponent,
    MycoursesComponent,
    NotFoundComponent,
    SubBannerComponent,
    BodyComponent,
    CardCourseComponent,
    ProgressBarComponent,
    CourseDetailsComponent,
    CourseListComponent,
    CreateCourseComponent,
    UserOptionDialogComponent,
    UserDetailsFormComponent,
    CourseFormComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  entryComponents: [LoginDialogComponent],  
  bootstrap: [AppComponent]
})
export class AppModule { }
