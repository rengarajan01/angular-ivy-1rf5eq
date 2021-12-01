import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styleclass',
  templateUrl: './styleclass.component.html',
  styleUrls: ['./styleclass.component.css']
})
export class StyleclassComponent implements OnInit {
  course:string="Angular";
  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  getColor(country:string) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
      case 'India':
        return 'orange';
      default:
        return "black";
    }
  }

}