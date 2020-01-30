
  var player1 = new Player ("Player 1", 0, 0, 0, true);
  var player2 = new Player ("Player 2", 0, 0, 0, false);

  function Player(name, total, turn, roll, active){
    this.name = name;
    this.total = total;
    this.turn = turn;
    this.roll = roll;
    this.active = active;


Player.prototype.rolling = function() {
  this.roll = Math.floor(Math.random()*6 + 1);
  if (this.roll === 1) {
  $("#dice").html('<img src="img/1.png">')
  }
    else if (this.roll === 2) {
  $("#dice").html('<img src="img/2.png">')
  }
    else if (this.roll === 3) {
    $("#dice").html('<img src="img/3.png">')
    }
    else if (this.roll  === 4) {
    $("#dice").html('<img src="img/4.png">')
    }
    else if (this.roll  === 5) {
    $("#dice").html('<img src="img/5.png">')
    }
    else if (this.roll === 6) {
      $("#dice").html('<img src="img/6.png">')
      }
    }
  
      
  Player.prototype.round = function() {
    if (this.roll === 1) {
      this.turn = 0;
    } else {
      this.turn += this.roll;
    }
  }
}

Player.prototype.totaler = function() {
  this.total += this.turn;
}

Player.prototype.switch = function() {
  if (this.active === true) {
    let x = true
    this.active = !x;
  } else 
   {
      this.active = true;
    }
  }


Player.prototype.winCheck = function() {
  if (this.total >= 100) {
    alert(this.name +" VICTORY!");

  }
}

$(document).ready(function() {



  $("#roll1").click(function(event) {
    event.preventDefault();
    if (player1.active === true) {
      $(".player1Div").addClass("green");
      player1.rolling(); 
      if (player1.roll === 1){
        alert("You rolled a 1! Player 2 Turn START");
        $(".player1Div").removeClass("green");
        player1.switch();
      }
      player1.round(player1.roll);
      console.log("p1 roundscore" + player1.turn);
    
      } else if (player1.active === false) {
        $(".player2Div").addClass("green");
        player2.rolling();
          if (player2.roll === 1){
            alert("You rolled a 1! Player 1 Turn START");
            $(".player2Div").removeClass("green");
            player1.switch();
          } 
          player2.round(player2.roll);
          console.log("p1 roundscore" + player1.turn);
      }


    });


    $("#hold1").click(function(event) {
      event.preventDefault();
      
      if (player1.active === true) {
        player1.totaler();
        $(".player1Div").removeClass("green");
        $("#total1").text(player1.total);
        player1.turn = 0;
        player1.winCheck();
        player1.switch();
        player2.switch();
        console.log("player one is active" + player1.active);
      } else {
          player2.totaler();
          $(".player2Div").removeClass("green");
          $("#total2").text(player2.total);
          player2.turn = 0;
          player2.winCheck();
          player1.switch();
          player2.switch();
          console.log("player two is active" + player2.active);
      }
    
      });


  });







