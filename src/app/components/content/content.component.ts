import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  worldPotential: string[] = [
    'Dynamic reports and dashboards',
    'Templates for everyone',
    'Development workflow',
    'Limitless busines automation',
  ];

  // First way you can do this homework by using @Input decorator and
  // the default object is declared in the content component
  // While in html file you have to check the condition to display the default value
  // and the dynamic value that you get from the sidebar component
  // subject = {
  //   subjectName: 'Angular',
  //   description: `Angular is an open framework and
  // platform for creating Single Page Applications, written in TypeScript and supported and developed by Google.`,
  //   thumbnail: 'angular.svg',
  // };
  // @Input() item: any;
}
