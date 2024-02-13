import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingDarkComponent } from './loading-dark.component';

describe('LoadingDarkComponent', () => {
  let component: LoadingDarkComponent;
  let fixture: ComponentFixture<LoadingDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingDarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
