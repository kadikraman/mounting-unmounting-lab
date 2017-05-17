import React from 'react';

export default class Pancake extends React.Component {

  // TODO: create a componentDidMount() which will start the interval to count how long the pancake has been cooking
  componentDidMount() {
    this.startInterval();
  }
  // TODO: create a componentWillUnmount() which will clear the interval
  componentWillUnmount() {
    this.cleanUpInterval();
  }

  updateCounter() {
    this.setState({
      timeCooked: this.state.timeCooked + 1
    })
  }

  startInterval() {
    this.interval = setInterval(this.updateCounter, 1000);
  }

  cleanUpInterval() {
    clearInterval(this.interval);
  }

  flip() {
    this.setState({
      flippedAt: this.state.timeCooked
    })
  }

  getPancakeStatus() {
    const { timeCooked, flippedAt } = this.state;

    // first side
    if (!flippedAt) {
      if (timeCooked < 2) return 'raw';
      if (timeCooked === 2) return 'cooked';
      return 'burnt';
    }

    //second side
    if (flippedAt > 2) return 'burnt';
    if (timeCooked === 4 && flippedAt === 2) return 'cooked';
    return 'raw';
  }

  takeItOff() {
    const { id } = this.props;
    const { timeCooked, flippedAt } = this.state;
    let status = this.getPancakeStatus();
    this.props.takeItOff(id, status);
  }

  constructor(props) {
    super(props);
    this.state = {
      timeCooked: 0,
      flippedAt: undefined
    };
    this.updateCounter = this.updateCounter.bind(this);
    this.flip = this.flip.bind(this);
    this.takeItOff = this.takeItOff.bind(this);
  }

  render() {
    const { timeCooked, flippedAt } = this.state;
    const firstSide = Boolean(this.state.flippedAt === undefined);
    const status = this.getPancakeStatus();

    return (
      <div className={`Pancake --${status}`}>
        <div className="Pancake__content">
          <p>I am a pancake.</p>
          Time cooked on {`${firstSide ? 'first' : 'second'}`} side: {`${firstSide ? timeCooked : timeCooked - flippedAt}`}
          <div>{ firstSide ? <button onClick={this.flip}>Flip me!</button> : <button onClick={this.takeItOff}>Take me off!</button>}</div>
        </div>
      </div>
    )
  }
}
