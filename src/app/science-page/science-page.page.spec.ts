import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SciencePagePage } from './science-page.page';

describe('SciencePagePage', () => {
  let component: SciencePagePage;
  let fixture: ComponentFixture<SciencePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SciencePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
