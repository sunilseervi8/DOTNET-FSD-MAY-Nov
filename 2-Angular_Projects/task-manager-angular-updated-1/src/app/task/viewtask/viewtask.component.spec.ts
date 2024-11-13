import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtaskComponent } from './viewtask.component';

describe('ViewtaskComponent', () => {
  let component: ViewtaskComponent;
  let fixture: ComponentFixture<ViewtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewtaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
