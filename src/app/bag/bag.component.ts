import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InputConfig } from '../shared/forms/models/input/input-config';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
})
export class BagComponent implements OnInit {
  switchIt: any = 'bagReview';
  componentForm = this.fb.group({
    quantity: [
      '12',
      [
        Validators.required,
      ],
    ],
  });
  constructor(private fb: FormBuilder) { }
  inputConfig(
    placeholder: string = 'Placeholder',
    type: string = 'text'
  ): InputConfig {
    return {
      type,
      placeholder,
    };
  }
  ngOnInit(): void {
  }

}
