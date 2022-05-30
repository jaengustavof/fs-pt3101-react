import { useState } from "react";
import Button from "./Button";
import TextLight from "./TextLight";

const BUTTONS = 5;

export default function Light() {
  const [buttonsStates, setButtonsStates] = useState(
    // [false, false, false]
    Array.from({ length: BUTTONS }, () => false)
  );

  const handleClick = (order) =>
    setButtonsStates((prevState) => {
      return prevState.map((state, index) =>
        order === index ? !state : state
      );
    });

  const isLight = () => {
    return !buttonsStates.filter((button) => !button).length;
  };

  return (
    <section>
      <h2>Lusesitas</h2>

      <section>
        {/* <Button order={0} state={buttonsStates[0]} handleClick={handleClick} />
        <Button order={1} state={buttonsStates[1]} handleClick={handleClick} />
        <Button order={2} state={buttonsStates[2]} handleClick={handleClick} /> */}
        {buttonsStates.map((state, index) => {
          return (
            <Button
              key={index}
              order={index}
              state={state}
              handleClick={handleClick}
            />
          );
        })}
      </section>

      <section>
        <TextLight light={isLight()} />
      </section>
    </section>
  );
}
