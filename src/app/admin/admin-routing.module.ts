import { NgModule, EmbeddedViewRef } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { EmailComponent }  from './email/email.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent,
    children:[{
      path:'',component:UserComponent
    },{
      path:'email',component:EmailComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
