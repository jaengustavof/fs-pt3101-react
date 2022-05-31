import { useState } from "react";
import Input from "./Input";
import Text from "./Text";

export default function InputContainer() {
  const [textValue, setTextValue] = useState("");

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  return (
    <section className="input-container">
      <Input textValue={textValue} handleChange={handleChange} />
      <Text textValue={textValue} />
    </section>
  );
}
