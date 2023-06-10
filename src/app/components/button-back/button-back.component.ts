import { Location } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'inf-button-back',
  templateUrl: './button-back.component.html',
  styleUrls: ['./button-back.component.scss']
})
export class ButtonBackComponent implements OnInit {

  @Input() display: number = 0;


  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  backRoute() {
    //this.eventEmitterService.setButtonBack(true);
    this.location.back();
  }
}
