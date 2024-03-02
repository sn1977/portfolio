import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
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

    scrollToContact(): void {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }

}
