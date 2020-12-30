import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InputConfig } from '../shared/forms/models/input/input-config';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
})
export class BagComponent implements OnInit {
  switchIt: any = 'bagFormA';
  componentForm = this.fb.group({
    quantity: [
      '12',
      [
        Validators.required,
      ],
    ],
  });
  constructor(private fb: FormBuilder) { }
  inputConfig(): InputConfig {
    return {
      type: 'text',
      placeholder: 'Full Address',
    };
  }
  ngOnInit(): void {
  }

}
