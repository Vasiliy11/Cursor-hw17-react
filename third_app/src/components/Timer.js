import React from 'react';
import './timer.scss';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.time,
      button: 'Start',
      progressBar: 100,
    };
  }
  componentDidMount() {
    if (this.props.autostart) {
      this.startTimer();
    }
  }

  startTimer = () => {
    this.timerID = setInterval(() => {
      this.setState({
        time: this.state.time - this.props.step,
        progressBar:
          ((this.state.time - this.props.step) / this.props.time) * 100,
      });
      if (this.state.time <= 0) {
        clearInterval(this.timerID);
      }
    }, this.props.step);
    this.setState({ button: 'Stop' });
  };

  stopTimer = () => {
    this.setState({ button: 'Start' });
    clearInterval(this.timerID);
  };
  startStopToggle = (e) => {
    this.state.button === 'Start'
      ? this.startTimer(this.state.time, this.props.step)
      : this.stopTimer();
  };
  render() {
    return (
      <div className="timer">
        <button onClick={this.startStopToggle}>{this.state.button}</button>
        <div
          className="bar"
          style={{ width: this.state.progressBar + '%' }}
        ></div>
      </div>
    );
  }
}

export default Timer;
