import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mysvg-1',
  templateUrl: './mysvg-1.component.html',
  styleUrls: ['./mysvg-1.component.css']
})
export class Mysvg1Component implements OnInit {

  nasosOffColor: string;
  nasosOnColor: string;

  constructor() {
    console.log('In Mysvg1Component constructor!');

    this.nasosOffColor = 'yellow';
    this.nasosOnColor = 'red';
   }

  ngOnInit() {
    console.log('In Mysvg1Component ngOnInit!');
  }

  getElemId(event)  {
    console.log('getElemId:: Element ID is: ' + event.target.id);
    const el = document.getElementById(event.target.id);
    if (el.style.fill === this.nasosOnColor) {
      el.style.fill = this.nasosOffColor;
    } else  {
      el.style.fill = this.nasosOnColor;
    }
  }


  togglePathColor(event) {
    console.log('Function: togglePathColor(event)');
    console.log('Target id is: ' + event.target.id);
    console.log('currentTarget id is: ' + event.currentTarget.id);

    const el = document.getElementById(event.target.id);

    if (el.style.stroke === this.nasosOnColor) {
      el.style.stroke = this.nasosOffColor;
    } else {
      el.style.stroke = this.nasosOnColor;
    }

  }

}
