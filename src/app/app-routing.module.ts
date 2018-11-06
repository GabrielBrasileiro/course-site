import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from 'src/app/app.component';
import {MycoursesComponent} from 'src/app/common/components/mycourses/mycourses.component';
import {NotFoundComponent} from 'src/app/common/components/not-found/not-found.component';
import {BodyComponent} from 'src/app/common/components/body/body.component';

const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'my-courses', component: MycoursesComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
