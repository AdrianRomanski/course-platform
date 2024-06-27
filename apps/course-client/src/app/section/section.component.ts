import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { CourseSection } from '@course-workspace/shared/interfaces';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class SectionComponent {
  @Input()
  section!: CourseSection;
}
