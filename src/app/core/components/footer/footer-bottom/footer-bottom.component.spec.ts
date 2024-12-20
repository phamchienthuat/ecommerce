import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBottomComponent } from './footer-bottom.component';

describe('FooterBottomComponent', () => {
  let component: FooterBottomComponent;
  let fixture: ComponentFixture<FooterBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterBottomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
