import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CategoryComponent {
  @Input() data: any;
}
