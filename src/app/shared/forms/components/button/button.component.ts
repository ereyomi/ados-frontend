import { Component, Input, OnInit, ChangeDetectorRef, } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: string;
  @Input() color: string;

  @Input() class: string;
  @Input() disabled: boolean;

  @Input() href: string;

  btnClasses = {
    primary: 'btn app-primary-btn',
    secondary: 'btn app-secondary-btn',
    secondaryB: 'btn btn-secondary-b',
    tertiary: 'btn-no-padding btn-tertiary',
  };
  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {}

  get btnClass(): string {
    if (typeof this.color === 'undefined') {
      return `${ this.btnClasses.primary } ${ this.class || '' }`;
    } else {
      return `${ this.btnClasses[this.color] } ${ this.class || '' }`;
    }
  }

  get isDisabled(): boolean {
    if (typeof this.disabled === 'undefined' || typeof this.disabled === null) {
      return false;
    } else {
      return this.disabled;
    }
  }
}
