const lightLogic = {
  [true]: "Light on",
  [false]: "Light off",
};

export default function TextLight({ light }) {
  return <p>{lightLogic[light]}</p>;
}
