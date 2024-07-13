// Import Component decorator, Input and OnInit interface from Angular core library
import {Component, Input, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import { CommonModule } from '@angular/common';


/**
 * Decorator that marks a class as an Angular component and provides configuration metadata
 * that determines how the component should be processed, instantiated, and used at runtime.
 */
@Component({
    selector: 'app-projects', // Defines the custom element name for this component
    standalone: true, // Indicates that the component is standalone, meaning it can be used without an NgModule
    imports: [TranslateModule, CommonModule], // Specifies an array of imports that are used within the component's template
    templateUrl: './projects.component.html', // Path to the HTML file associated with this component
    styleUrls: ['./projects.component.scss'] // Path to the style file associated with this component
})
export class ProjectsComponent implements OnInit {
    constructor(private translateService: TranslateService) {
    }

    /**
     * Input property to accept project data from parent component.
     */
    @Input() project: any;

    /**
     * Flag to determine whether the display sequence of project elements should be changed.
     */
    changeSequence = false;

    /**
     * Lifecycle hook that is called after Angular has initialized all data-bound properties.
     * This method sets up initial state and performs actions needed for the component's setup.
     */
    ngOnInit() {
        /**
         * Calls changeSequenceProject to adjust the visual layout based on the specific project's name.
         * This is typically used to modify the layout for a distinct appearance of certain projects.
         */
        this.changeSequenceProject();

        /**
         * Initializes the AOS (Animate On Scroll) library if the code is running in a browser environment.
         * The check `typeof window !== 'undefined'` ensures that AOS is not initialized during server-side rendering
         * where 'window' object is not available. This avoids errors in environments without a DOM, like Node.js.
         */
        if (typeof window !== 'undefined') {
            AOS.init();
        }
    }

    /**
     * Modifies the `changeSequence` property based on the project's name.
     * Specifically, if the project name is 'El Pollo Loco', changes the layout or presentation sequence.
     */
    changeSequenceProject() {
        this.changeSequence = this.project.name == 'El Pollo Loco';
    }
}
