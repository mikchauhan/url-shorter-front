import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlAnalyticsComponent } from './url-analytics.component';

describe('UrlAnalyticsComponent', () => {
  let component: UrlAnalyticsComponent;
  let fixture: ComponentFixture<UrlAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlAnalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
