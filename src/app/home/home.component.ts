import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  coverageForce: any;
  vacantLand: any;
  label1 = 'Is the coverage force placed ?';
  label2 = 'Is this vacant land ?';
  constructor() { }

  ngOnInit(): void {
  }

  getCoverageForceValue(event: string) {
    this.coverageForce = event;
  }

  getVacantLandValue(event: string) {
    this.vacantLand = event;
  }
}
