const buttonLogic = {
  [true]: "ON",
  [false]: "OFF",
};

export default function Button({ state, order, handleClick }) {
  return (
    <button onClick={() => handleClick(order)}>{buttonLogic[state]}</button>
  );
}
