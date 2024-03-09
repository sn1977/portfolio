// Import the Component decorator from the Angular core library and CommonModule for common directives
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

/**
 * Component decorator that attaches metadata to the MySkillsComponent class,
 * including its selector, standalone status, imports, and associated HTML and SCSS files.
 */
@Component({
    selector: 'app-my-skills', // Defines the custom tag for this component
    standalone: true, // Marks this component as standalone, making it capable of being used independently
    imports: [CommonModule], // Specifies CommonModule as an import for using common directives
    templateUrl: './my-skills.component.html', // Links to the HTML template file
    styleUrls: ['./my-skills.component.scss'] // Links to the SCSS stylesheet file
})
export class MySkillsComponent {
    /**
     * An array holding information about skills including the file name of the image and the skill name.
     */
    skills = [
        {img: 'angular.png', name: 'Angular'},
        {img: 'ts.png', name: 'TypeScript'},
        {img: 'javascript.png', name: 'JavaScript'},
        {img: 'html.png', name: 'HTML'},
        {img: 'firebase.png', name: 'Firebase'},
        {img: 'git.png', name: 'GIT'},
        {img: 'css.png', name: 'CSS'},
        {img: 'api.png', name: 'Rest-Api'},
        {img: 'scrum.png', name: 'Scrum'},
        {img: 'material.png', name: 'Material design'},
        {img: 'wp.png', name: 'Word press'}
    ];

    /**
     * Scrolls the page to the contact section smoothly.
     */
    scrollToContact(): void {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }

}
