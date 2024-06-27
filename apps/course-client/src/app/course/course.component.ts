import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../section/section.component';
import { Observable, of } from 'rxjs';
import { CourseSection } from '@course-workspace/shared/interfaces';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, SectionComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})
export class CourseComponent {

  sections$: Observable<CourseSection[]> = of([
    {
      id: '1',
      name: 'Week 1',
      lessons: [
        {
          id: '1',
          title: '1. First lesson',
          description: 'This is the first lesson'
        },
        {
          id: '2',
          title: '2. Second lesson',
          description: 'This is the second lesson'
        }
      ]
    }
  ]);

}
