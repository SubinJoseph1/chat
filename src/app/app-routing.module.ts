import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupchatComponent } from './groupchat/groupchat.component';
import { HomepageComponent } from './homepage/homepage.component';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';
import { User3Component } from './user3/user3.component';
import { User4Component } from './user4/user4.component';
import { User5Component } from './user5/user5.component';

const routes: Routes = [
  {
    path:'user1',
    component:User1Component
  },{
    path:'',
    component:HomepageComponent
  },{
    path:'user2',
    component:User2Component
  },{
    path:'group',
    component:GroupchatComponent
  },
  {
    path:'group',
    children:[{
      path:'user3',
      component:User3Component

    }
    ,{
      path:'user4',
      component:User4Component
    },{
      path:'user5',
      component:User5Component
    }]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
