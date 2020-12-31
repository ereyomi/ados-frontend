import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductsService } from '../core/services/products.service';
import { InputConfig } from '../shared/forms/models/input/input-config';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
})
export class BagComponent implements OnInit, OnDestroy {
  switchIt: any = 'bag';
  isDisplay = true;
  isDisplay$: Subscription;
  componentForm = this.fb.group({
    quantity: [
      '12',
      [
        Validators.required,
      ],
    ],
  });
  constructor(private fb: FormBuilder, private pS: ProductsService) { }
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
    this.isDisplay$ = this.pS.getBagModalDisplayStatus().subscribe(status => this.isDisplay = status);
  }
  closeModal(): void {
    this.pS.closeBagModal();
  }
  stopModalPropagation(event: Event): void {
    event.stopPropagation();
  }
  switchBagView(view: string): void {
    this.switchIt = view;
  }
  ngOnDestroy(): void {
    this.isDisplay$.unsubscribe();
  }

}
