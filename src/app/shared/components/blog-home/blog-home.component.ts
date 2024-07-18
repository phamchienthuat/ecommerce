import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { link } from 'node:fs';
import { title } from 'node:process';

@Component({
  selector: 'blog-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-home.component.html',
  styleUrl: './blog-home.component.scss',
})
export class BlogHomeComponent {
  data: any = [
    {
      id: 1,
      title: 'Quality Foods Requirments For Every Human Body’s',
      image: 'https://shofy-fashion.botble.com/storage/main/blog/post-5.jpg',
      date: new Date(),
      tags: [
        { name: 'Fashion', link: '' },
        { name: 'Sunglasses', link: '' },
      ],
    },
    {
      id: 2,
      title: 'Quality Foods Requirments For Every Human Body’s',
      image: 'https://shofy-fashion.botble.com/storage/main/blog/post-5.jpg',
      date: new Date(),
      tags: [
        { name: 'Fashion', link: '' },
        { name: 'Sunglasses', link: '' },
      ],
    },
    {
      id: 3,
      title: 'Quality Foods Requirments For Every Human Body’s',
      image: 'https://shofy-fashion.botble.com/storage/main/blog/post-5.jpg',
      date: new Date(),
      tags: [
        { name: 'Fashion', link: '' },
        { name: 'Sunglasses', link: '' },
      ],
    },
  ];
}
