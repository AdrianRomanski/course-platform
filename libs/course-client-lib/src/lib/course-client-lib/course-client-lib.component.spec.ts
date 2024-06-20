import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseClientLibComponent } from './course-client-lib.component';

describe('CourseClientLibComponent', () => {
  let component: CourseClientLibComponent;
  let fixture: ComponentFixture<CourseClientLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseClientLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseClientLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
