import React, { useEffect, useState } from "react";
import "./FlipperTimer.css";

const FlipClock = () => {
  const storedTargetDate = localStorage.getItem("countdownTargetDate");
  const initialTargetDate = storedTargetDate
    ? parseInt(storedTargetDate, 10)
    : new Date().getTime() + 20 * 24 * 60 * 60 * 1000;

  const [countToDate, setCountToDate] = useState(initialTargetDate);

  useEffect(() => {
    localStorage.setItem("countdownTargetDate", countToDate.toString());

    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const timeBetweenDates = Math.ceil((countToDate - currentDate.getTime()) / 1000);

      if (timeBetweenDates <= 0) {
        clearInterval(intervalId);
        setCountToDate(currentDate.getTime() + 20 * 24 * 60 * 60 * 1000);
      } else {
        updateAllCards(timeBetweenDates);
      }
    }, 250);

    return () => clearInterval(intervalId);
  }, [countToDate]);

  const updateAllCards = (time) => {
    const seconds = time % 60;
    const minutes = Math.floor((time / 60) % 60);
    const hours = Math.floor((time / 3600) % 24);
    const days = Math.floor(time / (3600 * 24));

    updateCard(document.querySelector("[data-days]"), days);
    updateCard(document.querySelector("[data-hours]"), hours);
    updateCard(document.querySelector("[data-minutes]"), minutes);
    updateCard(document.querySelector("[data-seconds]"), seconds);
  };

  const updateCard = (card, newNumber) => {
    const digit = card.querySelector(".digit");
    digit.textContent = newNumber;
  };

  return (
    <div className="flipper-coounter">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="container-segment">
              <div className="segment">
                <div className="flip-card" data-days>
                  <h2 className="digit">0</h2>
                </div>
              </div>
              <h5 className="segment-title">Days</h5>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="container-segment">
              <div className="segment">
                <div className="flip-card" data-hours>
                  <h2 className="digit">0</h2>
                </div>
              </div>
              <h5 className="segment-title">Hours</h5>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="container-segment">
              <div className="segment">
                <div className="flip-card" data-minutes>
                  <h2 className="digit">0</h2>
                </div>
              </div>
              <h5 className="segment-title">Minutes</h5>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="container-segment">
              <div className="segment">
                <div className="flip-card" data-seconds>
                  <h2 className="digit">0</h2>
                </div>
              </div>
              <h5 className="segment-title">Seconds</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipClock;
