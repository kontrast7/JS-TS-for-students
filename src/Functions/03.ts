import { student, StudentTypes } from "../Object/02";

export const sum = (a: number, b: number) => {
  return a + b;
};

export function sum2(a: number, b: number) {
  return a + b;
}

export const addSkill = (st: StudentTypes, skill: string) => {
  st.technologies.push({ id: new Date().getTime(), title: skill });
};

export const onActive = (st: StudentTypes, active: boolean) => {
  st.isActive = active;
};
export const changeCity = (st: StudentTypes, country: string) => {
  st.address.city.title = country;
};
