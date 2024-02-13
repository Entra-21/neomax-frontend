import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingLightComponent } from './loading-light.component';

describe('LoadingLightComponent', () => {
  let component: LoadingLightComponent;
  let fixture: ComponentFixture<LoadingLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingLightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
