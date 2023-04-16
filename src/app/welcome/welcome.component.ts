import { Component } from '@angular/core';
import {AppConfigService} from "../initializer/app-config.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  product$ = this.service.dataAction$

  constructor(private service: AppConfigService) {
  }

}
