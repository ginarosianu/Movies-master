import { Component } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {

  public heroImageUrl = require("./images/movie1.jpg");
}
