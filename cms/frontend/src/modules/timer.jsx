import React, { useState, useEffect } from "react";

function buildTimerString(sec) {
  sec /= 1000;
  const h = (sec / 3600).toFixed();
  const m = ((sec % 3600) / 60).toFixed();
  const s = ((sec % 3600) % 60).toFixed();
  return `${h} ${m} ${s}`;
}


class Timer extends React.Component {
  constructor(props) {
    super(props);

    const { debug = false, remained = new Date(2027, 2, 2) } = this.props;

    this.state = {
      timerText: "",
    };

    if (!debug) {
       setInterval(() => {
        const current = new Date();
        this.setState({
          timerText: buildTimerString(new Date(remained - current)),
        });
       
      }, 1000);
    }
  }
  render() {
    const { timerText } = this.state;

    return (
      <h3
        style={{
          direction: "ltr",
        }}
        class="text-white"
      >
        {timerText}
      </h3>
    );
  }
}

export default Timer;
