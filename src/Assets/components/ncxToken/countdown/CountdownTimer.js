import React from 'react';
import { useCountdown } from './useCountdown';
import DateTimeDisplay from './DateTimeDisplay';

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  const ExpiredNotice = () => {
    return (
      <div className="expired-notice">
        <span>Expired!!!</span>
        <p>Please select a future date and time.</p>
      </div>
    );
  };

  const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="show-counter">
          <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 1} />
          <p>:</p>
          <DateTimeDisplay value={hours} type={'Hours'} isDanger={hours <= 0} />
          <p>:</p>
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={minutes <= 0 } />
          <p>:</p>
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={seconds <= 1} />
      </div>
    );
  };

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;