import { ManType } from "./07";

let props: ManType;

beforeEach(() => {
  props = {
    name: "Alex",
    age: 19,
    lessions: [{ title: "1" }, { title: "2" }, { title: "3" }],
    adress: {
      street: {
        title: "Mira",
      },
    },
  };
});

test("obj", () => {
  const { age, lessions } = props;

  const { title } = props.adress.street;

  expect(age).toBe(19);
  expect(lessions.length).toBe(3);
  expect(title).toBe("Mira");
});

test("arr", () => {
  const l1 = props.lessions[0];
  const l2 = props.lessions[1];

  const [ls1, ls2] = props.lessions;

  expect(l1.title).toBe("1");
  expect(l2.title).toBe("2");
  expect(ls1.title).toBe("1");
  expect(ls2.title).toBe("2");
});
