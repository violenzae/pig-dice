import $ from 'jquery';
import { Player } from './player';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

  

$(document).ready(function() {
  var player1 = new Player ("Player 1", 0, 0, 0, true);
  var player2 = new Player ("Player 2", 0, 0, 0, false);
  console.log(player1);
  $("#roll1").click(function(event) {
    event.preventDefault();
    if (player1.active === true) {
      $(".pig1").addClass("red");
      player1.rolling(); 
      $("#dice").text(player1.roll);
      if (player1.roll === 1){
        alert("You rolled a 1! Player 2 Turn START");
        $(".pig1").removeClass("red");
        $(".pig2").addClass("red");
        player1.switch();
        player2.switch();
      }
      player1.round(player1.roll);
      console.log("p1 roundscore" + player1.turn);
    
      } else if (player1.active === false) {
        $(".pig2").addClass("red");
        player2.rolling();
        $("#dice").text(player2.roll);
          if (player2.roll === 1){
            alert("You rolled a 1! Player 1 Turn START");
            $(".pig2").removeClass("red");
            $(".pig1").addClass("red");
            player1.switch();
            player2.switch();
          } 
          player2.round(player2.roll);
          console.log("p1 roundscore" + player1.turn);
      }
    });

    $("#hold1").click(function(event) {
      event.preventDefault();
      
      if (player1.active === true) {
        player1.totaler();
        $(".pig1").removeClass("red");
        $("#total1").text(player1.total);
        player1.turn = 0;
        player1.winCheck();
        player1.switch();
        player2.switch();
        console.log("player one is active" + player1.active);
      } else {
          player2.totaler();
          $(".pig2").removeClass("red");
          $("#total2").text(player2.total);
          player2.turn = 0;
          player2.winCheck();
          player1.switch();
          player2.switch();
          console.log("player two is active" + player2.active);
      }
      });
  });







