import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private spacexService: SpacexService
   ) {}

 company;
  rocket;
   

  ngOnInit(): void {
    this.spacexService.getInfo().subscribe(response => 
    {
      setTimeout(() => {
        this.company = response;    
      }, 1000);
    });

    this.spacexService.getSingleRocket("starship").subscribe(response2 => 
    {
      this.rocket = response2;
    });

};

}