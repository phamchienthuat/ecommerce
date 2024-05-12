import { Component } from '@angular/core';
import { BannerComponent } from '../../../shared/components/banner/banner.component';
import { link } from 'fs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent],
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
}
