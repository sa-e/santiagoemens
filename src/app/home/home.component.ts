import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../component/component.component';
import { CvModule } from '../cv/cv.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [   
    CommonModule,
    MatIconModule,
    ComponentModule,
    CvModule,
  ]
})
export class HomeComponentModule { }
