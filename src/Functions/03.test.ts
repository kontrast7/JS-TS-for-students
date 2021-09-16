import { StudentTypes } from "../Object/02";
import {addSkill, changeCity, onActive} from "./03";
let student: StudentTypes;

beforeEach(() => {
  student = {
    id: 1,
    name: "Alex",
    age: 18,
    isActive: false,
    address: {
      streetAddress: "Golodeda",
      city: {
        title: "Minsk",
        country: "Belarus",
      },
    },
    technologies: [
      { id: 1, title: "html" },
      { id: 2, title: "css" },
      { id: 3, title: "js" },
    ],
  };
});

test("new tech skill should be added students", () => {
  expect(student.technologies.length).toBe(3);
  addSkill(student, "React");
  expect(student.technologies.length).toBe(4);
  expect(student.technologies[3].title).toBe("React");
});

test("student should be maid active", () => {
  expect(student.isActive).toBe(false);
  onActive(student, true);
  expect(student.isActive).toBe(true);
});

test("student lives in city", () => {
  expect(student.address.city.title).toBe("Minsk");
  changeCity(student, "Gomel");
  expect(student.address.city.title).toBe("Gomel");
});