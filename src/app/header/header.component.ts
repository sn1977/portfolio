import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

    mobileMenu = false;
    showMobileMenu() {
        if (this.mobileMenu) {
            this.mobileMenu = false;
            document.body.style.overflowY = 'unset';
        }
        else if (!this.mobileMenu) {
            this.mobileMenu = true;
            document.body.style.overflowY = 'hidden';
        }
    }


    closeMobileMenu() {
        this.mobileMenu = false;
        document.body.style.overflowY = 'unset';
    }
}
