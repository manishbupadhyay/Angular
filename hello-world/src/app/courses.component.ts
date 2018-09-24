//import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
  
    {{courses.title | uppercase}} <br/>
    {{courses.rating | number:'2.1-1'}} <br/>
    {{courses.students | number}} <br/>
    {{courses.price | currency:'INR':true:'3.2-2'}} <br/>
    {{courses.releaseDate | date:'full'}} <br/>
    `
})

export class CoursesComponent {
    // Pipes
    courses = {
        title : "The complete Angular 4 course",
        rating: 4.987,
        students: 35548,
        price: 190.95,
        releaseDate : new Date(2018,8,25)
    }
    // email = "ayan@example.com";
    
    // onKeyUp(){
    //     console.log(this.email);
    // }
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