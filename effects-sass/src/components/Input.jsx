export default function Input({ textValue, handleChange }) {
  return (
    <section className="input">
      <input
        value={textValue}
        onChange={handleChange}
        className="input__element"
      />
    </section>
  );
}
