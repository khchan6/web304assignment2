import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  
  constructor(
    private spacexService: SpacexService
   ) {}

   rockets;

  ngOnInit(): void {
    this.spacexService.getRockets().subscribe(response => {
      setTimeout(() => {
        this.rockets = response;    
      }, 1000);
  })}

}