import React from 'react';
import CountdownTimer from './CountdownTimer';
import { useTranslation } from "react-i18next";

export default function App() {
  const THREE_DAYS_IN_MS = 1 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const { t } = useTranslation();
  return (
    <div id="token_countdown">
        <h1>{t("round_1_starts_in")}</h1>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
    </div>
  );
}

