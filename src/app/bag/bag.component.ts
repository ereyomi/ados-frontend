import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
})
export class BagComponent implements OnInit {
  componentForm = this.fb.group({
    quantity: [
      '12',
      [
        Validators.required,
      ],
    ],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
