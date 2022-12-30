import { Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  public lang!: string; 

  public goToPrincipal(){
    document.getElementById("principal")?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      //inline: "start"
    });
  }

  public goToCv(){
    document.getElementById("cv")?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      //inline: "start"
    });
  }


  public getLang(){
    if(this.translate.getBrowserLang() === 'es')
    {
      return 'es'
    } else return 'en'
  }
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang(this.getLang());
    this.lang = this.getLang()
  }

  switchLang(selectedLang: string) {
    this.lang = selectedLang
    this.translate.use(selectedLang);
  }
}
