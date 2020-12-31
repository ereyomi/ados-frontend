import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private pS: ProductsService) { }
  openBag(): void {
    this.pS.openBagModal();
  }
  ngOnInit(): void {
  }

}
