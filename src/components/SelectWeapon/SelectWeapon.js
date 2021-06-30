import React from 'react';

import paper from './../../assets/paper.png'
import rock from './../../assets/rock.png'
import scissors from './../../assets/scissors.png'

const selectWeapon = (props) => (
          <div className="selections-container">
            <h4>Select your weapon of mass destruction!</h4> 
            <div className="btn-container">
              <button id="rock" onClick={props.checkSelections.bind(undefined,'ROCK')}><img className="weapon-img" src={rock} alt="Rock" />Rock</button>
            </div>
            <div className="btn-container">
              <button id="paper" onClick={props.checkSelections.bind(undefined,'PAPER')}><img className="weapon-img" src={paper} alt="Paper"/>Paper</button> 
            </div>
            <div className="btn-container">
              <button id="scissors" onClick={props.checkSelections.bind(undefined,'SCISSORS')}><img className="weapon-img" src={scissors} alt="Scissors"/>Scissors</button>
            </div>
        </div>
    )
export default selectWeapon;