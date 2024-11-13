import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalForUpdateComponent } from './modal-for-update.component';

describe('ModalForUpdateComponent', () => {
  let component: ModalForUpdateComponent;
  let fixture: ComponentFixture<ModalForUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalForUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalForUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
