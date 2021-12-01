import { Component, OnInit } from '@angular/core';
import { course } from '../course/course.module';

@Component({
  selector: 'app-coursecomp',
  templateUrl: './coursecomp.component.html',
  styleUrls: ['./coursecomp.component.css'],
})
export class CoursecompComponent implements OnInit {
  courselist: course[];

  constructor() {
    this.courselist = [
      {
        code: 1,
        name: 'Angular',
        desc: 'Angular course',
        price: 2000,
      },
      {
        code: 2,
        name: 'React',
        desc: 'React course',
        price: 3000,
      },
      {
        code: 3,
        name: 'Java',
        desc: 'Java course',
        price: 4000,
      },
    ];
  }

  ngOnInit() {}
}
