import React from "react";

interface inputData {
  myType?: string;
  myPlaceholder?: string;
  myOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  myValue?: string | number;
  myClass: string | number;
}
const PrimeryInput = ({
  myOnChange,
  myValue,
  myType,
  myPlaceholder,
  myClass,
}: inputData) => {
  return (
    <input
      type={myType}
      placeholder={myPlaceholder}
      className={`text-black placeholder:text-lg placeholder:font-normal font-medium text-lg placeholder:text-gray-500 rounded-xl px-3 py-4 w-full border border-black outline-none max-lg:placeholder:text-base max-md:placeholder:text-sm max-lg:text-sm ${myClass}`}
      onChange={myOnChange}
      value={myValue}
    />
  );
};

export default PrimeryInput;
