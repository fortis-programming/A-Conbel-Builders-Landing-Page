import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureItemsComponent } from './feature-items.component';

describe('FeatureItemsComponent', () => {
  let component: FeatureItemsComponent;
  let fixture: ComponentFixture<FeatureItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
