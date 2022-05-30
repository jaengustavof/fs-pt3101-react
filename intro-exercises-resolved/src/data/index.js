const list = [
  {
    id: 1,
    name: "Animal",
  },
  {
    id: 2,
    name: "Domestic",
    parent: 1,
  },
  {
    id: 3,
    name: "Cat",
    parent: 2,
  },
  {
    id: 4,
    name: "Dog",
    parent: 2,
  },
  {
    id: 5,
    name: "Wild",
    parent: 1,
  },
  {
    id: 6,
    name: "Wolf",
    parent: 5,
  },
  {
    id: 7,
    name: "Bear",
    parent: 5,
  },
];

export const getList = () => {
  return list;
};

export const getAnimals = () => {
  return list.filter((animal) => animal.parent > 1);
};
export const getTypes = () => {
  return list.filter((animal) => animal.parent === 1);
};
export const getByParent = (id) => {
  return list.filter((animal) => animal.parent === id);
};
