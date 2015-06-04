class Player {
  playTurn(warrior) {

    this._health;

      //if the space in front of you is occupied.
      if(!warrior.feel().isEmpty()){
        //tests if captive
        if(warrior.feel().isCaptive()){
          warrior.rescue()
        }
        //tests is enemy
        else if(warrior.feel().isEnemy()){
          warrior.attack()
        }

      }
      // if the space is empty
      else{
        if(warrior.health() < 17 && warrior.health() < this._health ){
              warrior.walk('backward');
            }
        else if(warrior.health() < this._health){
          warrior.rest();
        }
        else{
          warrior.walk();
        }
      }

     // this._health = warrior.health();

/*

    if(!){
      warrior.attack();
    }else if(warrior.feel().isEmpty() && warrior.health() < this._health){
      warrior.walk()
    }else if(warrior.feel().isEmpty() && warrior.health() < 15){
      warrior.rest();
    }else{
      warrior.walk()
    }
    this._health = warrior.health();
*/


  }
}

global.Player = Player;
