import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {httpTranslateLoader} from '../app.module';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent {
public navigate(){
  this.router.navigate(['/', 'cv'])
}
constructor(private router: Router) {
  // ...
}
}

@NgModule({
  declarations: [
    ComponentComponent
  ],
  exports:[ComponentComponent],
  imports: [   
    CommonModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpTranslateLoader,
                deps: [HttpClient]
            }
        })
  ]
})
export class ComponentModule { }

