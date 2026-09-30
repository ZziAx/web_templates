import { useEffect, useState } from "react";
// import sendLog from "../src/logger";

const breakPoints = {
  mobile: 0,
  mobile_md: 500,
  mobile_lg: 800,
  tablet: 1000,
  laptop: 1500,
};

function _findBreakpoint(breakpoint) {
  var name = "";
  var value = 0;

  Object.entries(breakPoints).forEach((b) => {
    const _name = b[0];
    const _breakpoint = b[1];

    if (breakpoint >= _breakpoint) {
      if (_breakpoint >= value) {
        name = _name;
        value = _breakpoint;
      }
    }
  });

  return name;
}
function useScreenSize() {
  var width = window.innerWidth;

  const [device, setDevice] = useState(_findBreakpoint(width));

  //   sendLog(`logs ${device} ${width}`);
  useEffect(() => {
    window.addEventListener("resize", (event) => {
      const _width = window.innerWidth;
      const d = _findBreakpoint(_width);
      if (d != device) {
        setDevice(d);
      }
    });
  }, []);

  return {
    device,
  };
}

export function isLargerBreakpoint({ largerThan, check }) {
  const currentBreakpoint = breakPoints[largerThan];
  var largerbreakpoints = [];
  Object.entries(breakPoints).forEach((b) => {
    if (b[1] >= currentBreakpoint) {
      largerbreakpoints.push(b[0]);
    }
  });
  return largerbreakpoints.includes(check);
}

export function isSmallerBreakpoint({ smallerThan, check }) {
  const currentBreakpoint = breakPoints[smallerThan];
  var smallerbreakpoints = [];
  Object.entries(breakPoints).forEach((b) => {
    if (b[1] <= currentBreakpoint) {
      smallerbreakpoints.push(b[0]);
    }
  });
  return smallerbreakpoints.includes(check);
}

export default useScreenSize;
