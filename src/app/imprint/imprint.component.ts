import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit{
    ngOnInit(): void {
        window.scrollTo(0, 0);
    }
}
