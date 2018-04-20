import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name;
  email;
  message;
  isValid = true;
  isSubmitted = false;

  constructor(private router: Router) { }

  ngOnInit() {
    const leftPanel: any = document.querySelector('.left-panel');
    const rightPanel: any = document.querySelector('.right-panel');
    const innerComponent: any = document.querySelector('.component');
    const portfolioComponents: any = document.querySelectorAll('.contact-container');
    if (leftPanel && rightPanel) {
      leftPanel.classList.toggle('left-panel-shift');
      rightPanel.classList.toggle('right-panel-shift');
      if (rightPanel.classList.contains('right-panel-shift-undo')) {
        rightPanel.classList.toggle('right-panel-shift-undo');
      }
      if (leftPanel.classList.contains('left-panel-shift-undo')) {
        leftPanel.classList.toggle('left-panel-shift-undo');
      }
      innerComponent.classList.toggle('hidden');
      setTimeout(() => {
        portfolioComponents.forEach(element => {
          element.classList.toggle('display');
        });
      }, 1000);

    }
  }

  closeComponent() {
    const leftPanel: any = document.querySelector('.left-panel');
    const rightPanel: any = document.querySelector('.right-panel');
    const innerComponent: any = document.querySelector('.component');
    if (leftPanel && rightPanel) {
      leftPanel.classList.toggle('left-panel-shift');
      rightPanel.classList.toggle('right-panel-shift-undo');
      leftPanel.classList.toggle('left-panel-shift-undo');
      rightPanel.classList.toggle('right-panel-shift');
      innerComponent.classList.toggle('hidden');
    }
    this.router.navigate(['/']);
  }

  validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  validateForm() {
    if (this.name && this.email && this.message) {
      if (this.name !== '' && this.email !== '' && this.message !== '' && this.validateEmail(this.email)) {
        this.isValid = true;
        return true;
      }
    }
    this.isValid = false;
    return false;
  }

  updateValidity() {
    this.validateForm();
  }

  submitForm() {
    if (this.validateForm()) {
      emailjs.send("default_service", "template_NgxCjRmr", { name: this.name, email: this.email, message: this.message }, "user_b7ePATwBISC3Um4pfPf3E")
        .then(function (response) {
          console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        }, function (err) {
          console.log("FAILED. error=", err);
        });
      this.isSubmitted = true;
    }
  }


}
