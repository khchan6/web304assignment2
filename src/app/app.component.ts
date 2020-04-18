import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpaceX API';
  childData: string;
  year=new Date().getFullYear();

  captureEmittedData(emittedData) {
    console.log(emittedData);
    this.childData = emittedData;
  }


}
