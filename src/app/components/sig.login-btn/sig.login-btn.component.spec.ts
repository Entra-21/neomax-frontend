import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigLoginBtnComponent } from './sig.login-btn.component';

describe('SigLoginBtnComponent', () => {
  let component: SigLoginBtnComponent;
  let fixture: ComponentFixture<SigLoginBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigLoginBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SigLoginBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
