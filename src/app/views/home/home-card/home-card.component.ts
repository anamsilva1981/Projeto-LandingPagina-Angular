import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {
  @Input() icon = "";
  @Input() title = "";
  @Input() subtitle = "";

  
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
}