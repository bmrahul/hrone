import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  model: any = {};
  value = "na";

  constructor() { }

  ngOnInit(): void {
  }

  public options = [
    { value: "on", id: "On" },
    { value: "na", id: "NA" },
    { value: "off", id: "Off" },
  ]

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

  onSelectionChange(entry: any) {
    debugger
    this.value = entry;
  }
}
