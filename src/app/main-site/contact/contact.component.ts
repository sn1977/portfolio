import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, NgOptimizedImage, RouterLink],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{

    submitAttempted = false;

    contactForm = new FormGroup({
        nameForm: new FormControl('', [Validators.required, Validators.minLength(3),]),
        emailForm: new FormControl('', [Validators.required, Validators.email]),
        messageForm: new FormControl('', [Validators.required, Validators.minLength(5),]),
        agreeToTerms: new FormControl(false, [Validators.requiredTrue])
    });

    ngOnInit() {
        this.contactForm.get('nameForm')?.valueChanges.subscribe(value => {
            console.log('Name changed: ', value);
        });

        this.contactForm.get('emailForm')?.valueChanges.subscribe(value => {
            console.log('Email changed: ', value);
        });

        this.contactForm.get('messageForm')?.valueChanges.subscribe(value => {
            console.log('Message changed: ', value);
        });
    }

    scrollToContact(): void {
        document.getElementById('start')?.scrollIntoView({ behavior: 'smooth' });
    }

    showPrivacyAlert() {
        // Setzen Sie submitAttempted auf true, um die Warnmeldung anzuzeigen
        this.submitAttempted = true;
    }



    http = inject(HttpClient);

    onSubmit() {
        this.submitAttempted = true; // Benutzer hat versucht, das Formular zu senden

        if (this.contactForm.valid && this.contactForm.get('agreeToTerms')?.value) {
            this.http.post('https://deineDomain.de/sendMail.php', this.contactForm.value)
                .subscribe({
                    next: (response) => {
                        this.contactForm.reset();
                    },
                    error: (error) => {
                        console.error('Es gab ein Problem beim Senden der E-Mail', error);
                    },
                    complete: () => console.info('send post complete')
                });
        }
    }
}
