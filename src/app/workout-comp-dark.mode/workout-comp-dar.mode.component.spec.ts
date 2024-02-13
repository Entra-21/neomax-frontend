import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutCompDarModeComponent } from './workout-comp-dark.mode.component';

describe('WorkoutCompDarModeComponent', () => {
  let component: WorkoutCompDarModeComponent;
  let fixture: ComponentFixture<WorkoutCompDarModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutCompDarModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkoutCompDarModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
