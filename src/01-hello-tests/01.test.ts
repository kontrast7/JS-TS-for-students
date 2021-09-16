import { mult, splitWords, sum } from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
  a = 1;
  b = 2;
  c = 3;
});

test("sum should be correct", () => {
  const result1 = sum(a, b);
  const result2 = sum(a, c);

  expect(result1).toBe(3);
  expect(result2).toBe(4);
});

test("mult should be correct", () => {
  const result1 = mult(a, b);
  const result2 = mult(b, c);

  expect(result1).toBe(2);
  expect(result2).toBe(6);
});

test("split into words should be correct", () => {
  const sent1 = "Hello my friends!";
  const sent2 = "friends my";

  const result1 = splitWords(sent1);
  const result2 = splitWords(sent2);

  expect(result1.length).toBe(3);
  expect(result1[0]).toBe("hello");
  expect(result1[1]).toBe("my");
  expect(result1[2]).toBe("friends");
});
