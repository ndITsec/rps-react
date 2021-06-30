import React, { Component } from 'react';
import './Game.css'

import SelectWeapon from './SelectWeapon/SelectWeapon';
import ScoreBoard from './ScoreBoard/ScoreBoard';
import ScoreHistory from './ScoreHistory/ScoreHistory';

class Game extends Component {
  constructor(props){
    super(props)

    this.state = {
      games: [],
      score: {
        total: 0,
        wins: 0,
        losses: 0
      }
    }
  }
  
getComputerPick = () => {
  const options = ["ROCK", "PAPER", "SCISSORS"];
  return options[Math.floor(Math.random() * 3)];
}

checkSelections = (option) => {
  let game = {};
  let games = this.state.games;
  let score = this.state.score;
  let computer = this.getComputerPick(); 

  if (computer === option) {
    game.result = 1;
  } else if ( (computer === "ROCK" && option === "PAPER") || 
              (computer === "PAPER" && option === "SCISSORS") ||
              (computer === "SCISSORS" && option === "ROCK") ) {
    game.result = 2;
    score.wins++;
  } else {
    game.result = 0;
    score.losses++;
  }

  game.computer = computer;
  game.player = option;
  score.total += game.result;

  games.push(game);

  this.setState({games});
}

restartGame = () => {
  this.setState({ games: [] });
}
  
render() {
  return (
    <div>   
      <SelectWeapon checkSelections={this.checkSelections} />
      <ScoreBoard scores={this.state.games} restart={this.restartGame}/>
      <ScoreHistory games={this.state.games} />
    </div>
  )
}
}

export default Game;