import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabProductHomeComponent } from './tab-product-home.component';

describe('TabProductHomeComponent', () => {
  let component: TabProductHomeComponent;
  let fixture: ComponentFixture<TabProductHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabProductHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabProductHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
