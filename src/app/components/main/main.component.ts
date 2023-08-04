import { Component } from '@angular/core';
import { Subject } from 'src/app/model/subject';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  // first way, create a new variable to store the subject information
  // favoriteSubject: Subject | undefined;

  subject = {
    subjectName: 'Angular',
    description: `Angular is an open framework and
  platform for creating Single Page Applications, written in TypeScript and supported and developed by Google.`,
    thumbnail: 'angular.svg',
  };

  subjectInfo(selectedSubject: Subject) {
    console.log('Subject : ', selectedSubject);
    // this.favoriteSubject = selectedSubject;
    this.subject = selectedSubject;
  }

  isLoggedIn: boolean = false;

  logIn(): void {
    this.isLoggedIn = true;
  }

  logOut(): void {
    this.isLoggedIn = false;
  }
}
