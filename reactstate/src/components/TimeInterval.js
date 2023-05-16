import React, { Component } from 'react';

class TimeInterval extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastMountedTime: null,
      timeInterval: null
    };
  }

  componentDidMount() {
    this.setState({ lastMountedTime: new Date() });

    this.interval = setInterval(() => {
      const currentTime = new Date();
      const timeInterval = Math.floor(
        (currentTime - this.state.lastMountedTime) / 1000
      ); 
      this.setState({ timeInterval });
    }, 1000); 
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { timeInterval } = this.state;

    return (
      <div>
        <p>Time since last component mount: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default TimeInterval;
