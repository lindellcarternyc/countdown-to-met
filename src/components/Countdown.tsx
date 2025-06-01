import styles from "./Countdown.module.css";
import CountdownBox from "./CountdownBox";

export interface CountdownProps {
  duration: {
    months: number;
    days: number;
    weeks: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const Countdown = ({ duration }: CountdownProps) => {
  return (
    <div className={styles.countdown}>
      <div className={styles["countdown-group"]}>
        <CountdownBox time={duration.months} label="months" />
        <CountdownBox time={duration.weeks} label="weeks" />
        <CountdownBox time={duration.days} label="day" />
      </div>
      <div className={styles["countdown-group"]}>
        <CountdownBox time={duration.hours} label="hours" />
        <span className={styles.semicolon}>:</span>
        <CountdownBox time={duration.minutes} label="minutes" />
        <span className={styles.semicolon}>:</span>
        <CountdownBox time={duration.seconds} label="seconds" />
      </div>
    </div>
  );
};

export default Countdown;
