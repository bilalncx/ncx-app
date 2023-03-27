import React from 'react';
import CountdownTimer from './CountdownTimer';

export default function App() {
  const THREE_DAYS_IN_MS = 1 * 1 * 2 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div id="token_countdown">
        <h1>Round 1 Starts In</h1>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
    </div>
  );
}

