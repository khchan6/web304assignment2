import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-singlerocket',
  templateUrl: './singlerocket.component.html',
  styleUrls: ['./singlerocket.component.css']
})
export class SinglerocketComponent implements OnInit {

  constructor(
    private spacexService: SpacexService,
    private route: ActivatedRoute,
  ) { }

  rocket;

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log(params);
      const rocket_id = params.rocket_id;

      // pass the flightNumber as a parameter to getSingleLaunch, to make single launch API calls
      this.spacexService.getSingleRocket(rocket_id).subscribe(response => {
        console.log(response);
        this.rocket = response;
      })
    });
  }

}
