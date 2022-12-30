import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {httpTranslateLoader} from '../app.module';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent {
  goToCv() {
    document.getElementById("cv")?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
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
    MatIconModule,
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

