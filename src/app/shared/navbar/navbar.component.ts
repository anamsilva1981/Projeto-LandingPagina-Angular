import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from 'src/app/views/login/login.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor(public dialog: MatDialog) {}



  ngOnInit(): void {

  }
  
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();

  }


  openDialog() {
    this.dialog.open(LoginComponent);
  }
}
