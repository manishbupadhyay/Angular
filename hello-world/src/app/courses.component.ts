//import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
  
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `
})

export class CoursesComponent {
    email = "ayan@example.com";
    
    onKeyUp(){
        console.log(this.email);
    }
    // onDivClicked(){
    //     console.log("Div clicked");
    // }
    // onSave($event){
    //     $event.stopPropagation();
    //     console.log("Button Clicked",$event);
    // }
    
    // title = "List of courses";
    // courses;

    // constructor(service: CoursesService){
    //     //let service = new CoursesService();
    //     this.courses = service.getCourses();
    // }
}

// previously below code has been used in template
// <h2>{{ title }}</h2>
//     <ul>
//         <li *ngFor="let course of courses">
//             {{ course }}
//         </li>
//     </ul>