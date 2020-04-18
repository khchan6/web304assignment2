import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private spacexService: SpacexService
   ) {}

   info;

  ngOnInit(): void {
    this.spacexService.getHistory().subscribe(response => {
      // console.log(response);
    setTimeout(() => {  
      this.info = response;    
    }, 1000);
  })}

}
