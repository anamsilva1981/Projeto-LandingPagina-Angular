import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-princing-card',
  templateUrl: './princing-card.component.html',
  styleUrls: ['./princing-card.component.css']
})
export class PrincingCardComponent implements OnInit {

  @Input() icon = "";
  @Input() title = "";
  @Input() price = "";
  @Input() subtitle = "";
  @Input() bandwidth = "";
  @Input() onlinespace = "";
  @Input() support = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
