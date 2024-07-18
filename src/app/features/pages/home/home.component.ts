import { Component } from '@angular/core';
import { BannerComponent } from '../../../shared/components/banner/banner.component';
import { CategoryComponent } from '../../../shared/components/category/category.component';
import { ProductComponent } from '../../../shared/components/product/product.component';
import { TabProductHomeComponent } from '../../../shared/components/tab-product-home/tab-product-home.component';
import { ReviewHomeComponent } from '../../../shared/components/review-home/review-home.component';
import { BlogHomeComponent } from '../../../shared/components/blog-home/blog-home.component';
import { FeatureAreaComponent } from '../../../shared/components/feature-area/feature-area.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, CategoryComponent, ProductComponent, TabProductHomeComponent, ReviewHomeComponent, BlogHomeComponent, FeatureAreaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  bannerData = [
    {
      id: 1,
      title: 'Banner Title 1',
      description: 'Banner Description',
      image:
        'https://shofy-fashion.botble.com/storage/fashion/sliders/slider-1.png',
      link: '',
      width: '400px',
    },
    // {
    //   id: 2,
    //   title: 'Banner Title 2',
    //   description: 'Banner Description',
    //   image:
    //     'https://shofy-fashion.botble.com/storage/fashion/sliders/slider-2.png',
    //   link: '',
    //   width: '400px',
    // },
    // {
    //   id: 3,
    //   title: 'Banner Title 3',
    //   description: 'Banner Description',
    //   image:
    //     'https://shofy-fashion.botble.com/storage/fashion/sliders/slider-3.png',
    //   link: '',
    //   width: '400px',
    // },
  ];

  categoryData = [
    {
      id: 1,
      name: 'Quần áo',
      quantity: 14,
      image:
        'https://shofy-fashion.botble.com/storage/fashion/product-categories/3-600x600.jpg',
      link: '',
    },
    {
      id: 2,
      name: 'Quần áo',
      quantity: 10,
      image:
        'https://shofy-fashion.botble.com/storage/fashion/product-categories/3-600x600.jpg',
      link: '',
    },
    {
      id: 3,
      name: 'Quần áo',
      quantity: 10,
      image:
        'https://shofy-fashion.botble.com/storage/fashion/product-categories/3-600x600.jpg',
      link: '',
    },
    {
      id: 4,
      name: 'Quần áo',
      quantity: 10,
      image:
        'https://shofy-fashion.botble.com/storage/fashion/product-categories/3-600x600.jpg',
      link: '',
    },
    {
      id: 5,
      name: 'Quần áo',
      quantity: 10,
      image:
        'https://shofy-fashion.botble.com/storage/fashion/product-categories/3-600x600.jpg',
      link: '',
    },
    {
      id: 6,
      name: 'Quần áo',
      quantity: 10,
      image:
        'https://shofy-fashion.botble.com/storage/fashion/product-categories/3-600x600.jpg',
      link: '',
    },
    {
      id: 7,
      name: 'Quần áo',
      quantity: 10,
      image:
        'https://shofy-fashion.botble.com/storage/fashion/product-categories/3-600x600.jpg',
      link: '',
    },
    {
      id: 8,
      name: 'Quần áo',
      quantity: 10,
      image:
        'https://shofy-fashion.botble.com/storage/fashion/product-categories/3-600x600.jpg',
      link: '',
    },
  ];
}
