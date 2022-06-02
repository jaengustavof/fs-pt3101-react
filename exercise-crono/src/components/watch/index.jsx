import { useState, useEffect } from "react";
import "./watch.scss"

const pad = (int) => int.toString().padStart(2, "0");
const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
const getTime = () => {
  const time = new Date();

  return {
    hours: pad(time.getHours()),
    minutes: pad(time.getMinutes()),
    seconds: pad(time.getSeconds()),
    day: time.getDate(),
    month: time.getMonth()
  };
};
console.log(getTime())
export default function Watch() {

  const [time, setTime] = useState({
    hour: "",
    minutes: "",
    seconds: "",
    day: "",
    month: ""
  });

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTime());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const { hours, minutes, seconds, day, month } = time;

  return (
    <section className="watch-section">
      <h2>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </h2>
      <div className="date">
      <span className="date__info">{day}</span> <span className="date__info">{months[month]}</span>
      </div>
    </section>

  );
}
