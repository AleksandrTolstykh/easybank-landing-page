import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasybankFeatureComponent } from './easybank-feature.component';

describe('EasybankFeatureComponent', () => {
  let component: EasybankFeatureComponent;
  let fixture: ComponentFixture<EasybankFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasybankFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasybankFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
