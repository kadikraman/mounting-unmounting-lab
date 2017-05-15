import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import expect from 'expect';

import Game from './';

describe('Game', () => {
  it('sets the initial time when the game was started in componentWillMount', () => {
    const spy = expect.spyOn(Game.prototype, 'setCurrentTime');
    const wrapper = mount(<Game />);
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.length).toEqual(1);
    Game.prototype.setCurrentTime.restore();
  });
});
