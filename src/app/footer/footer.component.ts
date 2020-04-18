import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  @Output() dataEmitter: EventEmitter<any> = new EventEmitter<any>();
  dataForParent = 'For our teacher...';

  // the emitting function will use the data emitter
  // to emit the data that we want to send to the parent
  emittingFunction() {
    this.dataEmitter.emit(this.dataForParent);
  }


  ngOnInit() {
    this.emittingFunction();
  }

}
