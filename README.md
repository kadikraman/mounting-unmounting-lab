# React: Component Mounting and Unmounting

## Overview

You are a pancake chef in a fancy pancake restaurant. Time is ticking and customers are waiting, so you better get those pancakes out quick! Pancakes need to be cooked on either side and taken off the pan at the right moment before they burn for optimal deliciousness.

<p align="center">
  <img src="http://i.imgur.com/yti5NLe.gif"/>
</p>

Go on and run the game. It doesn't quite work yet, because some essential bits are missing and it's up to you to finish it off!

Pancakes need to be cooked equally on both sides to be yummy. The current settings are that if a pancake is cooked for exactly 2 seconds on either side, it's considered to be cooked perfectly. If it's cooked for more than 2 seconds on either side it will be burnt and otherwise it will be raw. You can change these settings in `<Pancake />`!

## Shop needs an opening time
First, you want to record the time your shop was opened. Open `<Game />` and notice a `setCurrentTime()` method already exits, but it is not yet called. Create a `componentWillMount()` method in `<Game />` which will call the `setCurrentTime()` when the component is first created. If you've done that correctly, you should see the current time at the top of the page.

## Pancake needs a timer!

Now it's time to implement the actual pancake cooking part of the game. Firstly, we need a timer on each pancake so we could record how long it's been cooking. Look in `<Pancake />` - the `startInterval()` method is already there. All you need to do is add a lifecycle method in `<Pancake />` at `componentDidMount()` (that's the point at which the pancake
component gets added to the page) which will start the counter.


## Tidy up the timer

Now that we've set up a timer, we need to make sure we also remove it as soon as it's not needed anymore. It is important to always clean up such long-running processes as soon as they are no longer needed. You wouldn't leave your dirty dishes on the table after you've finished eating - similarly you shouldn't be leaving your intervals ticking after the component using them has been dismounted. As you can see, a `cleanUpInterval()` function is all set up for you, so all you have left to do it call it just before the component gets unmounted from the page. That will be in the `componentWillUnmount()` method.

That's it! You've finished off the game! Happy pancake-making!

<p align="center">
  <img src="https://68.media.tumblr.com/f49e5cb49c696431cee4fa7da572092e/tumblr_nwpde9clnp1u7gnm9o1_500.gif"/>
</p>


## Resources

- [React: Component Specs and Lifecycle](https://facebook.github.io/react/docs/component-specs.html)
