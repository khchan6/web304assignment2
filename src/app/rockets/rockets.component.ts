import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {

  constructor(
    private spacexService: SpacexService
   ) {}

   rockets;

  ngOnInit(): void {
    this.spacexService.getRockets().subscribe(response => {
      console.log(response);
      this.rockets = response;    
  })}

}