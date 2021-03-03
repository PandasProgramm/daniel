import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutes} from './shared/routes';
import {HomeComponent} from './features/home/home.component';
import {HeaderComponent} from './features/header/header.component';
import {FooterComponent} from './features/footer/footer.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutes
  ]
})
export class StartModule { }
