import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandiadateprofileComponent } from './candiadateprofile.component';

describe('CandiadateprofileComponent', () => {
  let component: CandiadateprofileComponent;
  let fixture: ComponentFixture<CandiadateprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandiadateprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandiadateprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
