import { Component } from '@angular/core';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';
import { FooterTopComponent } from './footer-top/footer-top.component';
import { FooterMainComponent } from './footer-main/footer-main.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterBottomComponent, FooterTopComponent, FooterMainComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
