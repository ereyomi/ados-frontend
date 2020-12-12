import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {
  name = 'mock name';
  constructor() { }

  ngOnInit(): void {
  }

}
