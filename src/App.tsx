import { intervalToDuration } from "date-fns/intervalToDuration";

import "./App.css";
import Countdown, { type CountdownProps } from "./components/Countdown";
import { useEffect, useState } from "react";

type Duration = CountdownProps["duration"];

const getDuration = (interval: { start: Date; end: Date }): Duration => {
  const duration = intervalToDuration({
    start: interval.start,
    end: interval.end,
  });

  return {
    months: duration.months || 0,
    weeks: Math.floor((duration.days || 0) / 7),
    days: (duration.days || 0) % 7,
    hours: duration.hours || 0,
    minutes: duration.minutes || 0,
    seconds: duration.seconds || 0,
  };
};

const MET_START_DATE = new Date(2025, 9, 17, 9); // October 17, 2025, at 9:00 AM

const getDurationToMetStartDate = (): Duration =>
  getDuration({ start: new Date(), end: MET_START_DATE });

const App = () => {
  const [duration, setDuration] = useState(getDurationToMetStartDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(getDurationToMetStartDate);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <h2>Time to</h2>
      <h1>THE MET</h1>
      <Countdown duration={duration} />
    </div>
  );
};

export default App;
