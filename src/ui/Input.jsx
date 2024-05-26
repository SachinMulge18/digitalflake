import React from "react";

const Input = ({ id, type, value, onChange, label }) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <input
        className="border px-2 py-2.5 rounded-xl"
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </div>
  );
};

export default Input;
