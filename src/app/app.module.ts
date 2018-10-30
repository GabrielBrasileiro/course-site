import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppHeaderComponent } from './common/components/header/header.component';
import { AppFooterComponent } from './common/components/footer/footer.component';

import { AppBootstrapModule } from './common/modules/app-bootstrap.module';
import { AppAngularMaterialModule } from './common/modules/app-angular-material.module';
import { AppFirebaseModule } from './common/modules/app-firebase.module';

import { TabComponent } from './common/components/tab/tab.component';
import { LoginDialogComponent } from './common/dialogs/login-dialog/login-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    TabComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAngularMaterialModule,
    AppBootstrapModule,
    AppFirebaseModule
  ],
  entryComponents: [LoginDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
