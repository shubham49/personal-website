import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(type) {
    this.router.navigate(['/' + type]);
  }
}
