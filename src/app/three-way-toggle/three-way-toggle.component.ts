import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-three-way-toggle',
  templateUrl: './three-way-toggle.component.html',
  styleUrls: ['./three-way-toggle.component.scss']
})
export class ThreeWayToggleComponent implements OnInit {
  value = "na";
  switchtoggle: string = 'na';
  @Input() labelValue: string = '';
  @Output() toggleValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public options = [
    { value: "yes", id: "Yes" },
    { value: "na", id: "NA" },
    { value: "no", id: "No" },
  ]

  onSelectionChange(value: any) {
    this.toggleValue.emit(value);
  }
}
