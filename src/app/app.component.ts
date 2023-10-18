import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  startDate = new Date(2000, 0, 1);

  title = COURSES[2].description;

  price = 9.99;

  coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];
  ngrxCourse = COURSES[2];

  //
  //ViewChild grabs the first instance of the component it finds in the template.
  // - Only "local" components can be grabbed.
  //
  @ViewChild('cardRef')
  card: CourseCardComponent;

  @ViewChild('cardRef', {read: ElementRef})
  cardElement: ElementRef;

  @ViewChild('containerRef')
  containerDiv: ElementRef;

  

  constructor() {
    console.log('constructor - card', this.card);
  }

  onCourseSelected = (course: Course) => {
    console.log('Card clicked', course);
    console.log(this.card);
    console.log(this.containerDiv);
    console.log(this.cardElement);
  }

  //
  //First time the ViewChild stuff should be available.
  //
  ngAfterViewInit = (): void => {
    console.log('constructor - card', this.card);
  }
}
