import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title = 'SpaceX API';

  constructor() { }
  @Input() dataFromApp: string;

  ngOnInit() {
    // console.log(this.dataFromApp);
  }

}
