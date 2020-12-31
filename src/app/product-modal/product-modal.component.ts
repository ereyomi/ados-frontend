import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductsService } from '../core/services/products.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
})
export class ProductModalComponent implements OnInit, OnDestroy {
  name = 'mock name';
  isDisplay = true;
  isDisplay$: Subscription;
  componentForm: FormGroup;
  @HostListener('click', ['$event'])
  onClick(e: any): void {}
  constructor(private fb: FormBuilder, private pS: ProductsService) { }

  ngOnInit(): void {
    this.initForm();
    this.isDisplay$ = this.pS.getProductModalDisplayStatus().subscribe(status => this.isDisplay = status);
  }
  initForm(): void {
    this.componentForm = this.fb.group({
      quantity: [
        '0',
        [
          Validators.required,
        ],
      ],
    });
  }

  closeModal(): void {
    this.pS.closeProductModal();
  }
  openBag(): void {
    this.closeModal();
    this.pS.openBagModal();
  }
  stopModalPropagation(event: Event): void {
    event.stopPropagation();
  }
  ngOnDestroy(): void {
    this.isDisplay$.unsubscribe();
  }

}
