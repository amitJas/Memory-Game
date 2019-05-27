import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

 // public color = 0
  constructor(public app: AppComponent) { }

  ngOnInit() {
  }


}
