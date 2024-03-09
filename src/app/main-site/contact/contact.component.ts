// Import necessary Angular core modules, form controls and validators, and common modules
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

/**
 * Defines ContactComponent as an Angular component.
 */
@Component({
    selector: 'app-contact', // Defines the custom tag for this component
    standalone: true, // Marks this component as standalone
    imports: [
        ReactiveFormsModule, // Imports ReactiveFormsModule for form functionalities
        CommonModule, // Imports CommonModule for common Angular directives
        NgOptimizedImage, // Imports NgOptimizedImage for optimized image handling
        RouterLink // Imports RouterLink for link navigation
    ],
    templateUrl: './contact.component.html', // Links to the HTML template file
    styleUrls: ['./contact.component.scss'] // Links to the SCSS stylesheet file
})
export class ContactComponent implements OnInit {
    /**
     * Indicates whether a submit attempt has been made.
     */
    submitAttempted = false;

    /**
     * Defines the form group for the contact form with validations.
     */
    contactForm = new FormGroup({
        nameForm: new FormControl('', [Validators.required, Validators.minLength(3)]),
        emailForm: new FormControl('', [Validators.required, Validators.email]),
        messageForm: new FormControl('', [Validators.required, Validators.minLength(5)]),
        agreeToTerms: new FormControl(false, [Validators.requiredTrue])
    });

    /**
     * Initializes component logic and subscriptions to form value changes.
     */
    ngOnInit() {
        // Subscribing to form value changes to log them to the console.
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

    /**
     * Scrolls to the contact section of the page.
     */
    scrollToContact(): void {
        document.getElementById('start-page')?.scrollIntoView({ behavior: 'smooth' });
    }

    /**
     * Sets the submitAttempted flag to true to display warning messages.
     */
    showPrivacyAlert() {
        this.submitAttempted = true;
    }

    // Injection of the HttpClient service for making HTTP requests
    http = inject(HttpClient);

    /**
     * Handles form submission, sending form data if valid, and logging response.
     */
    onSubmit() {
        this.submitAttempted = true; // Marks that a submit attempt has been made.

        // Checks if form is valid and terms are agreed upon before submitting.
        if (this.contactForm.valid && this.contactForm.get('agreeToTerms')?.value) {
            // POST request sending form data.
            this.http.post('https://sascha-nemeth.com/sendMail.php', this.contactForm.value)
                .subscribe({
                    next: (response) => {
                        this.contactForm.reset(); // Resets form upon successful submission.
                    },
                    error: (error) => {
                        console.error('There was an issue sending the email', error);
                    },
                    complete: () => console.info('Email send process complete')
                });
        }
    }
}

// // Other imports remain unchanged
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
//
// @Component({
//     // Component metadata remains unchanged
// })
// export class ContactComponent implements OnInit {
//     // Property definitions remain unchanged
//
//     constructor(private http: HttpClient) { } // Inject HttpClient service
//
//     ngOnInit() {
//         // Your ngOnInit logic remains unchanged
//     }
//
//     // Method definitions remain unchanged
//     scrollToContact(): void {
//         // Your scrollToContact logic remains unchanged
//     }
//
//     showPrivacyAlert(): void {
//         // Your showPrivacyAlert logic remains unchanged
//     }
//
//     onSubmit(): void {
//         this.submitAttempted = true; // Indicate that a submit attempt has been made
//         if (this.contactForm.valid) {
//             this.sendFormData(this.contactForm.value); // Call a separate method to handle the HTTP request
//         }
//     }
//
//     private sendFormData(formData: any): void {
//         // Move your HTTP POST logic here
//         this.http.post('https://sascha-nemeth.developerakademie.net/sendMail.php', formData).subscribe({
//             next: (response) => {
//                 this.contactForm.reset(); // Resets the form upon successful submission
//             },
//             error: (error) => {
//                 console.error('There was an issue sending the email', error);
//             },
//             complete: () => console.info('Email send process complete')
//         });
//     }
// }
