import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'memoryGame';

  public cards =[ {shape: 1, side: false , bingo: false},
                  {shape: 3, side: false , bingo: false},
                  {shape: 2, side: false , bingo: false},
                  {shape: 2, side: false , bingo: false},
                  {shape: 3, side: false , bingo: false},
                  {shape: 1, side: false , bingo: false} ]


  public countEvent = 0
  public first = null 
  public second = null      
  
  constructor(){}
  
  gameLogic(card){

  this.countEvent++;

  if(this.countEvent == 1 && card.bingo != true  ){ // first carde chosen
    console.log('in')
    this.first = card;
    this.first.side = true
  }
    if(this.countEvent == 2 && card.bingo != true ){ //second card chosen
      this.second = card;
      this.second.side = true

      if(this.first.shape == this.second.shape){ // we have bingo 
        this.first.bingo == true
        this.second.dingo ==  true
        this.countEvent = 0
      }else{
          setTimeout(() => {
            this.second.side = false 
            this.first.side = false
            this.countEvent = 0
          }, 500);
      }
    }
  }
}
