import React from "react";
import 'jquery';

function calculateTimeLeft() {
  const year = new Date().getFullYear();
  const difference = +new Date(`${year}-06-1`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      Mins: Math.floor((difference / 1000 / 60) % 60),
      Seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
}

export default function App() {
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  const timerComponents = Object.keys(timeLeft).map(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    return (
      <div className="timer">
        <div className="sfd">
            <span className="time">{timeLeft[interval]}</span>
            <span className="tct">{interval}{" "}</span>
        </div>
        <span className="colon">:</span>
      </div>
    );
  });

  return (
    <div className="token_timer">
        <h1>Round 1 Starts in</h1>
        <div className="countdown_timerjs">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    </div>
  );
}
