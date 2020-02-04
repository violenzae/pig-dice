import { Player } from './../src/player.js';

describe('Player Roll', () => {

  test('should return a random number when dice is rolled', () => {
    var PossibleNums = [1,2,3,4,5,6];
    var player1 = new Player("player 1", 0, 0, 0, true);
    expect(
    player1.rolling() === 1 ||
    player1.rolling() === 2 ||
    player1.rolling() === 3 ||
    player1.rolling() === 4 ||
    player1.rolling() === 5 ||
    player1.rolling() === 6).toBe(true);
  });
});

describe('Player Roll 1', () => {
  test('should have turn points = 0 after a player rolls a 1', () => {
    var player1 = new Player("player 1", 0, 45, 1, true);
    player1.round(player1.roll);
    expect(player1.turn).toEqual(0);
  });
});

describe('Player Hold', () => {
  test('should add turn points to total points when Player holds', () => {
    var player1= new Player("player 1", 5, 10, 0, true);
    player1.totaler();
    expect(player1.total).toEqual(15);
  });
});

describe('Player Switch', () => {
  test('should switch players when turn ends', () => {
    var player1 = new Player("player 1", 0, 0, 0, true);
    player1.switch();
    expect(player1.active).toBe(false);
  });
});