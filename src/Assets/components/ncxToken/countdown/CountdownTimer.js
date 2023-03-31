import React from 'react';
import { useCountdown } from './useCountdown';
import DateTimeDisplay from './DateTimeDisplay';
import { useTranslation } from "react-i18next";

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  const { t } = useTranslation();
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
          <DateTimeDisplay value={days} type={t("days")} isDanger={days <= 0} />
          <p>:</p>
          <DateTimeDisplay value={hours} type={t("hours")} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={minutes} type={t("mins")} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={seconds} type={t("seconds")} isDanger={false} />
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