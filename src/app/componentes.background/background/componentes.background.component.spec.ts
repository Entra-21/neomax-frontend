import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesBackgroundComponent } from './componentes.background.component';

describe('ComponentesBackgroundComponent', () => {
  let component: ComponentesBackgroundComponent;
  let fixture: ComponentFixture<ComponentesBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentesBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentesBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
