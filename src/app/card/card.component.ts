import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(public app: AppComponent) { }

  ngOnInit() {
  }


}
