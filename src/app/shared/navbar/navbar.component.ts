import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
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

  header_variable = false;
  @HostListener("document:scroll")
  scrollfunction() {
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.header_variable = true;
    } else {
      this.header_variable = false;
    }
  }
  
}

