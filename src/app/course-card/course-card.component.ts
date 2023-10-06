import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input({required: true})
  course: Course;

  @Input({required: true})
  cardIndex: number;

  @Output('onCourseSelected')
  courseEventEmitter = new EventEmitter<Course>();

  onCourseViewed = () => {
    console.log('Course card component - button clicked');

    this.courseEventEmitter.emit(this.course);
  }

  isImageVisible = (): boolean => this.course && this.course.iconUrl !== '';

  cardClasses = (): string[] => {
    let classes = [];
    if (this.course.category === 'BEGINNER') {
      classes.push('beginner');
    }
    
    return classes;
  }
}
