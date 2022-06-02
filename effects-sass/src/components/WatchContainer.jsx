<<<<<<< HEAD
import { useState, useEffect } from "react";

const pad = (int) => int.toString().padStart(2, "0");

const getTime = () => {
  const d = new Date();

  return {
    hours: pad(d.getHours()),
    minutes: pad(d.getMinutes()),
    seconds: pad(d.getSeconds()),
  };
};

export default function WatchContainer() {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const { hours, minutes, seconds } = time;

  return (
    <section className="watch">
      <p className="watch__time">
        {hours}:{minutes}:{seconds}
      </p>
    </section>
  );
}
=======
import { useState, useEffect } from "react"

const pad = (int) => int.toString().padStart(2, '0')

const getTime = () =>{
    const d = new Date();

    return {
        hours: pad(d.getHours()),
        minutes: pad(d.getMinutes()),
        seconds: pad(d.getSeconds()),
    }

};


export default function WatchContainer() {

    const [time, setTime] = useState({hours: '00', minutes: '00', seconds: '00'})

    useEffect(()=>{
        const id = setInterval(() => {
            setTime(getTime())
        }, 1000);

        return () => clearInterval(id) //elimina el setInterval que haya creado id(en la linea 20)
    }, [])

    const { hours, minutes, seconds} = time;

    return (
        <section className="watchContainer">
            <p className="watch_time">{hours}:{minutes}:{seconds}</p>
        </section>
    )
}
>>>>>>> origin
