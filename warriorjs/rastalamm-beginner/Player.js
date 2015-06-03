class Player {
  playTurn(warrior) {

    this._health;


    if(!warrior.feel().isEmpty()){
      warrior.attack();
    }else if(warrior.feel().isEmpty() && warrior.health() < this._health){
      warrior.walk()
    }else if(warrior.feel().isEmpty() && warrior.health() < 15){
      warrior.rest();
    }else{
      warrior.walk()
    }
    this._health = warrior.health();



  }
}

global.Player = Player;
