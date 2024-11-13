import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteBookComponent } from './edit-delete-book.component';

describe('EditDeleteBookComponent', () => {
  let component: EditDeleteBookComponent;
  let fixture: ComponentFixture<EditDeleteBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDeleteBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDeleteBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
