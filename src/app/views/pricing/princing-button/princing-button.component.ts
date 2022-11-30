import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-princing-button',
  templateUrl: './princing-button.component.html',
  styleUrls: ['./princing-button.component.css']
})
export class PrincingButtonComponent implements OnInit {

  @Input() content = "";

  constructor() { }

  ngOnInit(): void {
  }

}
