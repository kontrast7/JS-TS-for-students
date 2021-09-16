export type CityType = {
  title: string;
  houses: Array<HouseType>;
};

export type HouseType = {
  buildersAt: number;
  repair: boolean;
  adress: AdressType;
};

export type AdressType = {
  number: number;
  street: Array<StreetType>;
};

export type StreetType = {
  title: string;
};

export const toChange1 = (st: CityType, name: string) => {
  st.houses[0].adress.street[0].title = name;
};

export const changeNumberAdd100 = (city: CityType, number: number) => {
  city.houses[0].adress.number += number;
};

export const addStreet = (city: CityType, text: string) => {
  city.houses[0].adress.street.push({ title: text });
};

export const sayHello = (city: CityType) => {
  return `${city.title} построен в ${city.houses[0].buildersAt}`
}