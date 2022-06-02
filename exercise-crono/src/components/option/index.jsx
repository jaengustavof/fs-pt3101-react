import { useState } from "react";
import Watch from "../watch";
import Chrono from "../chrono";
import "./option.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'

export default function Option() {
  const [button1, setButton1] = useState([true, false]);
  function select() {
    const result = button1.map((btn) => !btn);
    setButton1(result);
  }
  return (
    <section className="watch-container">
      <button
        onClick={() => {
          select();
        }}
      >
        {button1[0] === true ? <FontAwesomeIcon icon={faClock} /> : <FontAwesomeIcon icon={faStopwatch} />}
      </button>
      {button1[0] !== true ? <Watch /> : <Chrono />}
    </section>
  );
}
