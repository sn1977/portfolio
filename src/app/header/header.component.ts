// Import necessary Angular core and common modules
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

/**
 * Defines HeaderComponent class as an Angular component.
 */
@Component({
    selector: 'app-header', // Defines the custom tag for this component
    standalone: true, // Marks this component as standalone for encapsulation
    imports: [
        NgIf, // Imports NgIf directive for conditional rendering in the template
        TranslateModule
    ],
    templateUrl: './header.component.html', // Links to the HTML template file
    styleUrl: './header.component.scss' // Links to the SCSS stylesheet file
})
export class HeaderComponent {
    /**
     * Tracks the visibility state of the mobile menu.
     */
    mobileMenu = false;

    constructor(private translateService: TranslateService) {
    }

    /**
     * Toggles the mobile menu's visibility and prevents or allows
     * scrolling on the body element accordingly.
     */
    showMobileMenu() {
        if (this.mobileMenu) {
            // If the mobile menu is open, close it and allow body scrolling.
            this.mobileMenu = false;
            document.body.style.overflowY = 'unset';
        }
        else if (!this.mobileMenu) {
            // If the mobile menu is closed, open it and prevent body scrolling.
            this.mobileMenu = true;
            document.body.style.overflowY = 'hidden';
        }
    }

    /**
     * Closes the mobile menu and allows scrolling on the body element.
     */
    closeMobileMenu() {
        // Closes the mobile menu and allows body scrolling.
        this.mobileMenu = false;
        document.body.style.overflowY = 'unset';
    }

    switchLanguage() {
        if (this.translateService.currentLang == 'de') {
            this.translateService.use('en');
        } else {
            this.translateService.use('de');
        }
    }
}
