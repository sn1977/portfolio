import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
    @Input() project: any;
    changeSequence = false;

    ngOnInit() {
        this.changeSequenceProject();
    }

    /**
     * Change the direction (position) of the shown project "El Pollo Loco"
     *
     */
    changeSequenceProject() {
        if (this.project.name == 'El Pollo Loco') {
            this.changeSequence = true;
        } else {
            this.changeSequence = false;
        }
    }
}


