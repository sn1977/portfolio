import {Component} from '@angular/core';
import {ProjectsComponent} from '../projects/projects.component';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [
        ProjectsComponent,
        CommonModule
    ],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
    public projects =
        [
            {
                name: 'Join',
                img: 'join.png',
                tec: 'JavaScript | HTML | CSS',
                description: 'Task manager inspired by the kanban system. Create and organize tasks using drag and drop functions, assign users and categorys.',
                githubLink: 'https://github.com/sn1977/join',
                projectLink: 'https://sascha-nemeth.developerakademie.net/join/html/logIn.html'
            },
            {
                name: 'El Pollo Loco',
                img: 'pollo-loco.png',
                tec: 'JavaScript | HTML | CSS',
                description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the crazy hen.',
                githubLink: 'https://github.com/sn1977/el_pollo_loco2',
                projectLink: 'https://sascha-nemeth.developerakademie.net/el_pollo_loco2/index.html'
            }
        ];
}
