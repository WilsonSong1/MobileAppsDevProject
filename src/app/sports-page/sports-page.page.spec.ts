import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportsPagePage } from './sports-page.page';

describe('SportsPagePage', () => {
  let component: SportsPagePage;
  let fixture: ComponentFixture<SportsPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
