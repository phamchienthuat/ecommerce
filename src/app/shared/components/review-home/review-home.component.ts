import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'review-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-home.component.html',
  styleUrl: './review-home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReviewHomeComponent {
  dataReview: any[] = [
    {
      id: 1,
      content:
        'Very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!',
      user: {
        name: 'Jimmy',
        image: 'https://shofy-fashion.botble.com/storage/main/users/7.jpg',
        job: 'UI/UX Designer',
      },
    },
    {
      id: 2,
      content:
        'Very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!',
      user: {
        name: 'Vicky',
        image: 'https://shofy-fashion.botble.com/storage/main/users/3.jpg',
        job: 'UI/UX Designer',
      },
    },
    {
      id: 3,
      content:
        'Very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!',
      user: {
        name: 'David',
        image: 'https://shofy-fashion.botble.com/storage/main/users/4.jpg',
        job: 'UI/UX Designer',
      },
    }
  ];
}
