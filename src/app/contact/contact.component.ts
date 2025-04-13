import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Getter for easy access to form fields
  get f() { 
    return this.contactForm.controls; 
  }

  onSubmit() {
    this.submitted = true;

    // Stop if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    // Process form submission
    console.log('Form Data:', this.contactForm.value);
    // TODO: Add your API call here
    
    // Reset form after successful submission
    this.contactForm.reset();
    this.submitted = false;
    alert('Your message has been sent!');
  }
}