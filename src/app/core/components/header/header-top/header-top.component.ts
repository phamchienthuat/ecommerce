import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-top',
  standalone: true,
  imports: [],
  templateUrl: './header-top.component.html',
  styleUrl: './header-top.component.scss',
})
export class HeaderTopComponent implements OnInit, OnDestroy {
  public currentIndex = 0;
  public interval: any;

  public dataSlide: any[] = [
    {
      id: 1,
      content:
        'Mua sắm với sự tự tin! Chúng tôi cung cấp dịch vụ hoàn trả trong 30 ngày không rắc rối để bạn yên tâm',
    },
    {
      id: 2,
      content:
        'Tận hưởng giao hàng miễn phí cho tất cả các đơn hàng trên $99! Mua sắm ngay bây giờ và tiết kiệm chi phí vận chuyển',
    },
    {
      id: 3,
      content: 'Mua 1 tặng 2 tính tiền 3',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    debugger;
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.dataSlide?.length;
    }, 8000);
  }

  stopAutoSlide(): void {
    clearInterval(this.interval);
  }

  previousSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.dataSlide.length) % this.dataSlide.length;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.dataSlide.length;
  }
}
