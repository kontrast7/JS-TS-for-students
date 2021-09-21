import React from "react";

export type ManType = {
  name: string;
  age: number;
  lessions: Array<{ title: string }>;
  adress: { street: { title: string } };
};
type PropsType = {
  title: string;
  man: ManType;
};

export const Dectructuring: React.FC<PropsType> = ({
  title,
  man,
  ...props
}) => {

  /*  const { title, man, ...rest } = props;*/ // можно так записывать

  return (
    <div>
      <h1>{title}</h1>
      <hr />
      <div>{man.name}</div>
    </div>
  );
};
