import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'course', loadComponent: () => import('./course/course.component')
      .then((x) => x.CourseComponent)}
];
