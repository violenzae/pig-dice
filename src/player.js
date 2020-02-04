export function Player(name, total, turn, roll, active){
  this.name = name;
  this.total = total;
  this.turn = turn;
  this.roll = roll;
  this.active = active;
}

Player.prototype.rolling = function() {
  this.roll = Math.floor(Math.random()*6 + 1);
  return this.roll;
}

Player.prototype.round = function() {
  if (this.roll === 1) {
    this.turn = 0;
  } else {
    this.turn += this.roll;
  }
}

Player.prototype.totaler = function() {
  this.total += this.turn;
}

Player.prototype.switch = function() {
  if (this.active === true) {
    this.active = false;
    
  } else {
    this.active = true;
  }
}

Player.prototype.winCheck = function() {
  if (this.total >= 100) {
    alert(this.name +" VICTORY!");
  }
}