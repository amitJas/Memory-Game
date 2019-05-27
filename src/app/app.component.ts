import { Component } from '@angular/core';

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
  public disable = true  // use to disadel click event until finish 
 
  gameLogic(card){

    if(!card.side || !this.disable){ //check card side
      if(this.countEvent == 0){ // first card
        this.first = card
        this.first.side = true
        this.countEvent++

      }else if(this.countEvent == 1){ //second card
        this.disable = false
        card.side = true

        if(this.first.shape == card.shape ){//match
          this.first.bingo = true
          card.bingo = true
          this.countEvent = 0
          this.disable = true

        }else{ // no match
          setTimeout(() => {
            this.first.side = false
            card.side = false
            this.countEvent = 0
            this.disable = true
          }, 700);
        }
      }
    }
  }
}



