import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  products = [
    {
      image: 'assets/images/product4.jpg',
      name: 'iphone 6',
      rating: 5,
      price: '866',
      currency: 'USD',
      currencySymbol: '$'
    },
    {
      image: 'assets/images/product4.jpg',
      name: 'iphone 6',
      rating: 5,
      price: '866',
      currency: 'USD',
      currencySymbol: '$'
    },
    {
      image: 'assets/images/product4.jpg',
      name: 'iphone 6',
      rating: 5,
      price: '866',
      currency: 'USD',
      currencySymbol: '$'
    },
    {
      image: 'assets/images/product4.jpg',
      name: 'iphone 6',
      rating: 5,
      price: '866',
      currency: 'USD',
      currencySymbol: '$'
    },
    {
      image: 'assets/images/product4.jpg',
      name: 'iphone 6',
      rating: 5,
      price: '866',
      currency: 'USD',
      currencySymbol: '$'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
