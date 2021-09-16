import {changeNumberAdd100, CityType, addStreet, sayHello} from "./02_02";
import { toChange1 } from "./02_02";

let city: CityType;

beforeEach(() => {
  city = {
    title: "New York City",
    houses: [
      {
        buildersAt: 2012,
        repair: false,
        adress: {
          number: 100,
          street: [
            {
              title: "Mira",
            }
          ],
        },
      },
    ],
  };
});

test("test city should contain 3 houses", () => {
  expect(city.houses.length).toBe(1);

  expect(city.houses[0].buildersAt).toBe(2012);
  expect(city.houses[0].repair).toBe(false);
  expect(city.houses[0].adress.number).toBe(100);
  expect(city.houses[0].adress.street[0].title).toBe("Mira");
});

test("change street", () => {
  expect(city.houses[0].adress.street[0].title).toBe("Mira");
  toChange1(city, "Lenina");
  expect(city.houses[0].adress.street[0].title).toBe("Lenina");
});

test("change number", () => {
  expect(city.houses[0].adress.number).toBe(100);
  changeNumberAdd100(city, 100);
  expect(city.houses[0].adress.number).toBe(200);
});

test("add street", () => {
  addStreet(city, "Сан Франциско");
});

test("say hello", () => {
  const message = sayHello(city);

  expect(message).toBe("New York City построен в 2012")

});
