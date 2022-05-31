export default function Text({ textValue }) {
  return (
    <section className="text">
      <p className="text__element">{textValue || "Escribe algo, venga"}</p>
    </section>
  );
}
