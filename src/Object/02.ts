export type StudentTypes = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  address: AddressType;
  technologies: Array<TechnType>;
};
type AddressType = {
  streetAddress: string;
  city: CityType;
};
type CityType = {
  title: string;
  country: string;
};
type TechnType = {
  id: number;
  title: string;
};

export const student: StudentTypes = {
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
