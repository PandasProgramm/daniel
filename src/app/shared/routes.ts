import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';


const routes:Routes=[
  {
    path:'',
    loadChildren: () => import('src/app/features/startmodul/start.module').then((module)=>module.StartModule)
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
]
export const AppRouting= RouterModule.forRoot(routes);
