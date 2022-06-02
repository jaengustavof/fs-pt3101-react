import "./crono.scss"
import { useState, useEffect } from "react";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'

const pad = (int) => int.toString().padStart(2, "0");

export default function Chrono() {
  let [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
    miliseconds: "00"
  });

  let { hours, minutes, seconds, miliseconds } = time;
  const [count, setCount] = useState(false);

  const getTime = () => {
    if (miliseconds > 99) {
      seconds++;
      miliseconds = "00";
    }

    if (seconds > 59) {
      minutes++;
      seconds = "00";
    }

    if (minutes > 59) {
      hours++;
      minutes = "00";
    }

    if (hours > 24) {
      hours = "00";
    }

    return {
      hours: pad(hours),
      minutes: pad(minutes),
      seconds: pad(seconds),
      miliseconds: pad(miliseconds++)
    };
  };

  const start = () => {
    setCount(true);
  };
  const stop = () => {
    setCount(false);
  };

  const reset = () => {
    setCount(false);
    setTime({
      hours: "00",
      minutes: "00",
      seconds: "00",
      miliseconds: "00"
    });
  };
  useEffect(() => {
    if (count) {
      const id = setInterval(() => {
        setTime(getTime());
      }, 10);
      return () => clearInterval(id);
    }
  }, [count]);

  return (
    <section className="watch-section">
      <h2>
      <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>:<span>{miliseconds}</span>
      </h2>
      <div className="button-container">
        <button className="button-container__button" onClick={start}><FontAwesomeIcon icon={faPlay} color="green" /></button>
        <button className="button-container__button" onClick={stop}><FontAwesomeIcon icon={faPause} color="red" /></button>
        <button className="button-container__button" onClick={reset}><FontAwesomeIcon icon={faClockRotateLeft} /></button>
      </div>
    </section>
  );
}
