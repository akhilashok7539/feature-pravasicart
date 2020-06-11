import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  displayNavbar: string;
  constructor() { }

  ngOnInit() {
    this.displayNavbar = '1';
  }

  toggleNavbar() {

    if(this.displayNavbar == '0') {
        this.displayNavbar = '1';
      //  alert(this.displayNavbar);
    } if(this.displayNavbar == '1') {
    //    alert("1 - Changing to 0");
        this.displayNavbar = '0';
    } else {
        this.displayNavbar = '1';
    }
  }
}
