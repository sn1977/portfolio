// Import necessary Angular core and common modules
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
// Import ProjectsComponent to be used within the portfolio component
import {ProjectsComponent} from '../projects/projects.component';

/**
 * Component decorator that attaches metadata to the PortfolioComponent class,
 * including its selector, standalone status, imports, and associated HTML and SCSS files.
 */
@Component({
    selector: 'app-portfolio', // Defines the custom tag for this component
    standalone: true, // Marks this component as standalone for easier reuse
    imports: [
        ProjectsComponent, // Includes ProjectsComponent for displaying individual projects
        CommonModule // Imports CommonModule for using common Angular directives
    ],
    templateUrl: './portfolio.component.html', // Links to the HTML template file
    styleUrls: ['./portfolio.component.scss'] // Links to the SCSS stylesheet file
})
export class PortfolioComponent {
    /**
     * Public array holding the projects' information such as name, image, technology used, description,
     * and links to the GitHub repository and the project's live version.
     */
    public projects = [
        {
            name: 'Join',
            img: 'join.png',
            tec: 'JavaScript | HTML | CSS',
            description: 'Task manager inspired by the kanban system. Create and organize tasks using drag and drop functions, assign users and categories.',
            githubLink: 'https://github.com/sn1977/join',
            projectLink: 'https://join.sascha-nemeth.com'
        },
        {
            name: 'El Pollo Loco',
            img: 'pollo-loco.png',
            tec: 'JavaScript | HTML | CSS',
            description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the crazy hen.',
            githubLink: 'https://github.com/sn1977/el_pollo_loco2',
            projectLink: 'https://el-pollo-loco.sascha-nemeth.com/'
        }
    ];
}
