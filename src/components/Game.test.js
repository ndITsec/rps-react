import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import Game from './Game';
import SelectWeapon from './SelectWeapon/SelectWeapon';
import ScoreBoard from './ScoreBoard/ScoreBoard';
import ScoreHistory from './ScoreHistory/ScoreHistory';

jest.mock('react-dom');

configure({adapter: new Adapter()});

describe('<Game />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Game />);
    });

    it('should render selection buttons component', () => {
    expect(wrapper.find(SelectWeapon)).toHaveLength(1);
});
    it('should render scoreboard component', () => {
    expect(wrapper.find(ScoreBoard)).toHaveLength(1);
});
    it('should render score history component', () => {
    expect(wrapper.find(ScoreHistory)).toHaveLength(1);
});
    it('should render SelectWeapon images', () => {
   expect(wrapper.exists(<img className="weapon-img" alt="Rock" />)).toBe(true);
   expect(wrapper.exists(<img className="weapon-img" alt="Paper" />)).toBe(true);
   expect(wrapper.exists(<img className="weapon-img" alt="Scissors" />)).toBe(true);
 })
    it('should render score history table body', () => {
   expect(wrapper.exists(<tbody className="text-center"></tbody>)).toBe(true)
 })
    it('should render number of wins and defeats on the score board', () => {
   expect(wrapper.exists(<h4 id="green"></h4>)).toBe(true);
   expect(wrapper.exists(<h4 id="red"></h4>)).toBe(true)
 })
 

describe('<Game />', () => {
  it('responds to click events', () => {
    const checkSelections = sinon.spy();
    const wrapper2 = shallow(<SelectWeapon checkSelections={checkSelections} />);
    wrapper2.find('#rock').simulate('click');
    expect(checkSelections.calledOnce).toEqual(true);
  });
    it('responds to click events', () => {
    const checkSelections = sinon.spy();
    const wrapper2 = shallow(<SelectWeapon checkSelections={checkSelections} />);
    wrapper2.find('#paper').simulate('click');
    expect(checkSelections.calledOnce).toEqual(true);
  });
    it('responds to click events', () => {
    const checkSelections = sinon.spy();
    const wrapper2 = shallow(<SelectWeapon checkSelections={checkSelections} />);
    wrapper2.find('#scissors').simulate('click');
    expect(checkSelections.calledOnce).toEqual(true);
  });
});
});