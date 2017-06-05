import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
  <div class="container">
  <img class="smile1 spinRight" src="resources/images/smile.png">
  <img class="smile2" src="resources/images/smile.png">
  <img class="smile3" src="resources/images/smile.png">
  <img class="smile4" src="resources/images/smile.png">
  <img class="smile5" src="resources/images/smile.png">
  <img class="smile6" src="resources/images/smile.png">
  <img class="smile7" src="resources/images/smile.png">
  <img class="smile8" src="resources/images/smile.png">
    <h1>To Do for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <a class="spinRight" href="#" *ngFor="let currentTask of tasks"><li class="spinRight">{{currentTask.description}}</li></a>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course'),
    new Task('Begin brainstorming possible JavaScript group projects'),
    new Task('Add README file to last few Angular repos on GitHub')
  ];
}

export class Task {
  public done: boolean = false;
  constructor(public description: string) { }
}
