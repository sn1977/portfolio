import {Component} from '@angular/core';

@Component({
    selector: 'app-introduction',
    standalone: true,
    imports: [],
    templateUrl: './introduction.component.html',
    styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {

    scrollToContact(): void {
        document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
    }
}
