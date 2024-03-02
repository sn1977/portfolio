import { Component } from '@angular/core';
import {IntroductionComponent} from './introduction/introduction.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {MySkillsComponent} from './my-skills/my-skills.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ContactComponent} from './contact/contact.component';

@Component({
  selector: 'app-main-site',
  standalone: true,
    imports: [
        IntroductionComponent,
        AboutMeComponent,
        MySkillsComponent,
        PortfolioComponent,
        ContactComponent
    ],
  templateUrl: './main-site.component.html',
  styleUrl: './main-site.component.scss'
})
export class MainSiteComponent {

}
