import { getAnimals, getTypes, getByParent } from "../data";

export default function Animals() {
  return (
    <section>
      <h2>Animals</h2>
      <ul>
        {getAnimals().map((animal, index) => (
          <li key={index}>{animal.name}</li>
        ))}
      </ul>
      <br />

      <h2>Animals Types</h2>
      <ul>
        {getTypes().map((type, index) => (
          <li key={index}>{type.name}</li>
        ))}
      </ul>
      <br />

      <h2>Animals by Type</h2>
      <ol>
        {getTypes().map((type, index) => (
          <li key={index}>
            {type.name}
            <ul>
              {getByParent(type.id).map((animal, index) => (
                <li key={index}>{animal.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
