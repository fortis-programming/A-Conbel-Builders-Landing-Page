import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProofComponent } from './social-proof.component';

describe('SocialProofComponent', () => {
  let component: SocialProofComponent;
  let fixture: ComponentFixture<SocialProofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialProofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
