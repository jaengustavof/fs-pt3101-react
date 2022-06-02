export default function Input({ textValue, handleChange }) { //pasamos el handleChange, que es una prop, desde el inputContainer <input />. el textValue se envia tambien desde <input> pero el valor se env'ia una vez que sea actualizado por el handleChange. Esto es para asegurarnos que el valor del input y el valor del estado sean los mismos.
  
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
