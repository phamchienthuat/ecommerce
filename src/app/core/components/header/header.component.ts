import { Component } from '@angular/core';
import { HeaderMainComponent } from './header-main/header-main.component';
import { HeaderTopComponent } from './header-top/header-top.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderMainComponent, HeaderTopComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
