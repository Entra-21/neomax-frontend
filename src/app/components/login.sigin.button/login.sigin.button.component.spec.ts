import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSiginButtonComponent } from './login.sigin.button.component';

describe('LoginSiginButtonComponent', () => {
  let component: LoginSiginButtonComponent;
  let fixture: ComponentFixture<LoginSiginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSiginButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginSiginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
