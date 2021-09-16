export type ManTypes = {
  name: string;
  age: number;
};

const people: Array<ManTypes> = [
  { name: "Tom Jones", age: 41 },
  { name: "Alex Peterson", age: 18 },
  { name: "Peter Mid", age: 14 },
];

const dev = people.map((m) => ({
  stack: ["css", "html", "js", "react"],
  age: m.age,
  firstName: m.name.split(" ")[0],
  lastName: m.name.split(" ")[1],
}));

