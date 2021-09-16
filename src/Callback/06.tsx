import React, { ChangeEvent, MouseEvent } from "react";

export const User = () => {
  const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
    alert(e.currentTarget.name);
  };
  const saveUser = () => {
    alert("user saved");
  };
  const nameChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.currentTarget.value);
  };

  return (
    <div>
      <textarea onChange={nameChanged}>Max</textarea>
      <button name={"delete"} onClick={deleteUser}>
        delete
      </button>
      <button name={"save"} onClick={deleteUser}>
        save
      </button>
    </div>
  );
};
