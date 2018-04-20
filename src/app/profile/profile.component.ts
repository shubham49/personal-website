import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const leftPanel: any = document.querySelector('.left-panel');
    const rightPanel: any = document.querySelector('.right-panel');
    const innerComponent: any = document.querySelector('.component');
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
        document.querySelector('.profile-container a').classList.toggle('display');
        document.querySelector('.profile-container .col-sm-8').classList.toggle('display');
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
  
}
