import { TestBed } from '@angular/core/testing';
import{RouterTestingModule}  from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskService,HttpClientTestingModule,RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
