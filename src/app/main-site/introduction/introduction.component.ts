// Import the Component decorator from the Angular core library
import {Component} from '@angular/core';

/**
 * Component decorator that attaches metadata to the IntroductionComponent class,
 * including its selector, standalone status, imports, and associated HTML and SCSS files.
 */
@Component({
    selector: 'app-introduction', // Defines the custom tag for this component
    standalone: true, // Marks this component as standalone for modular architecture
    imports: [], // Specifies a list of components or modules to import
    templateUrl: './introduction.component.html', // Links to the HTML template file
    styleUrls: ['./introduction.component.scss'] // Links to the SCSS stylesheet file
})
export class IntroductionComponent {
    /**
     * Scrolls the page to the contact section smoothly.
     */
    scrollToContact(): void {
        document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
    }
}
