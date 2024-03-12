import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';

@Component({
  selector: 'app-email-success-dialog',
  standalone: true,
    imports: [
        MatDialogContent,
        MatDialogActions,
        MatDialogClose
    ],
  templateUrl: './email-success-dialog.component.html',
  styleUrl: './email-success-dialog.component.scss'
})
export class EmailSuccessDialogComponent {

}
