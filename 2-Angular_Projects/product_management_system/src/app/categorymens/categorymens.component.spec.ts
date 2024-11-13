import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorymensComponent } from './categorymens.component';

describe('CategorymensComponent', () => {
  let component: CategorymensComponent;
  let fixture: ComponentFixture<CategorymensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorymensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorymensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
