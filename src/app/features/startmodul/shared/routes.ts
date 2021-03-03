import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../features/home/home.component';

const routes:Routes=[
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  }
]
export const AppRoutes = RouterModule.forChild(routes);
