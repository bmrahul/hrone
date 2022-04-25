import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-three-way-toggle',
  templateUrl: './three-way-toggle.component.html',
  styleUrls: ['./three-way-toggle.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ThreeWayToggleComponent implements OnInit {
  idValue: any;
  value = "na";
  switchtoggle: string = 'na';
  @Input() labelValue: string = '';
  @Output() toggleValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.idValue = this.labelValue.replace(/\s/g, "").replace("?", "");
  }

  onSelectionChange(value: any) {
    this.toggleValue.emit(this.switchtoggle);
  }
}
