import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { spyOn } from 'expect';

import Pancake from './';

describe('Pancake', () => {
  it('sets up the interval updating the cooking time every second', () => {
    const spy = expect.spyOn(Pancake.prototype, 'startInterval');
    const wrapper = mount(<Pancake />);
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.length).toEqual(1);
    Pancake.prototype.startInterval.restore();
  });

  it('cleans up the interval when the component is destroyed', () => {
    const spy = expect.spyOn(Pancake.prototype, 'cleanUpInterval');
    const wrapper = mount(<Pancake />);
    wrapper.unmount();
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.length).toEqual(1);
    Pancake.prototype.cleanUpInterval.restore();
  });
});
