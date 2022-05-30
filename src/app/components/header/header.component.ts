import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggle: Boolean = false;
  clickEvent(){
    this.toggle = !this.toggle;
  }
  constructor() { }

  ngOnInit(): void {
   

  }

}

