import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'tab-product-home',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './tab-product-home.component.html',
  styleUrl: './tab-product-home.component.scss',
})
export class TabProductHomeComponent implements OnInit {
  dataProduct: any[] = [
    {
      id: 1,
      title: 'Dép Adidas',
      category: 'dep',
      image:
        'https://shofy-fashion.botble.com/storage/fashion/products/product-1-600x600.png',
      reviewCount: 10,
      price: 100,
      prePrice: 200,
    },
    {
      id: 2,
      title: 'Dép Adidas',
      category: 'dep',
      image:
        'https://shofy-fashion.botble.com/storage/fashion/products/product-1-600x600.png',
      reviewCount: 10,
      price: 100,
      prePrice: 200,
    },
    {
      id: 3,
      title: 'Dép Adidas',
      category: 'dep',
      image:
        'https://shofy-fashion.botble.com/storage/fashion/products/product-1-600x600.png',
      reviewCount: 10,
      price: 100,
      prePrice: 200,
    },
    {
      id: 4,
      title: 'Dép Adidas',
      category: 'dep',
      image:
        'https://shofy-fashion.botble.com/storage/fashion/products/product-1-600x600.png',
      reviewCount: 10,
      price: 100,
      prePrice: 200,
    },
    {
      id: 5,
      title: 'Dép Adidas',
      category: 'dep',
      image:
        'https://shofy-fashion.botble.com/storage/fashion/products/product-1-600x600.png',
      reviewCount: 10,
      price: 100,
      prePrice: 200,
    },
  ];
  selectedTab: number = 0;
  tabs: { label: string }[] = [
    { label: 'All' },
    { label: 'Featured' },
    { label: 'On sale' },
    { label: 'Trending' },
    { label: 'Top rated' },
  ];

  selectTab(index: number) {
    this.selectedTab = index;
  }

  ngOnInit(): void {}
}
