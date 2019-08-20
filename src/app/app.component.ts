import { Component } from '@angular/core';
import { Show, tvlibService } from 'tvlib';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  show$: Observable<Show>;

  
  constructor(private tvlib: tvlibService, private translate: TranslateService) {
    translate.setDefaultLang('es');
    this.show$ = this.tvlib.getShow(336);
    console.log(this.show$)
  }
}