import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingprofileComponent } from './trainingprofile.component';

describe('TrainingprofileComponent', () => {
  let component: TrainingprofileComponent;
  let fixture: ComponentFixture<TrainingprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
