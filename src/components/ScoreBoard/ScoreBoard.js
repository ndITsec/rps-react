import React from 'react';

const scoreBoard = (props) => {
    let outcome = props.scores.reduce((outcome, game) => {
        if (game.result === 2) {
          outcome.won++;
        } else if (game.result === 1) {
          outcome.tie++;
        } else if (game.result === 0) {
          outcome.lost++
        }
        return outcome
      }, {won:0, lost: 0, tie: 0});
  
      let message = 'Choose rock, paper or scissors!';
      let alertClass = '';
      if (props.scores.length) {
      
        var game = props.scores[props.scores.length - 1];
        if (game.result === 1) {
          message = 'Result: You tied. Try again!';
        } else if (game.result === 2) {
          message = 'Result: Victory! '+ game.player + ' beat ' + game.computer + '!';
          alertClass = 'won';
        } else {
          message = 'Result: Defeat! '+ game.computer + ' beat ' + game.player + '!';
          alertClass = 'lost'
        }
      }
    
    return (
      <div className="scoreboard">
        <div className="col-sm-12 alerts">
            <h4 className={alertClass}><strong>{message}</strong></h4>
        </div>
        <div className="text-center">
          <h4 className="caps">Score</h4>
        </div>            
        <nav className="navbar navbar-default">
          <div className="container-fluid gameInfo" style={{ display: 'block'}}>
            <div className="row text-center scores">      
              <div className="col-sm-4 text-center-large">
                <h4 id="green">Won: <span><strong>{outcome.won}</strong></span></h4>
              </div>
              <div className="col-sm-4 text-center-large">
                <h4 id="red">Lost: <span><strong>{outcome.lost}</strong></span></h4>
              </div>
              <div className="col-sm-4 text-center-large">
                <h4>Ties: <span><strong>{outcome.tie}</strong></span></h4>
              </div>
            </div>
          </div>
        </nav>
        <button className="btn btn-danger" onClick={props.restart}>Restart game</button>
      </div>
    )
  }

  export default scoreBoard;