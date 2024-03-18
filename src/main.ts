import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// import 'zone.js';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Component } from '@angular/core';
//
// @Component({
//     selector: 'app-root',
//     standalone: true,
//     imports: [TranslateModule],
//     template: `
//     <h1>{{'HELLO' | translate}} from {{ name }}!</h1>
//
//     <a target="_blank" href="https://angular.dev/overview">
//       Learn more about Angular
//     </a>
//   `,
// })
// export class App {
//     name = 'Angular';
// }

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
