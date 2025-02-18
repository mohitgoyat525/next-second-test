"use client";
import { DeleteIcon } from "@/utils/Icons";
import React, { useState } from "react";
import PrimaryInput from "./common/PrimemaryInput";

interface ToDoData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const ToDoList = () => {
  const toDoForm = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const [value, setValue] = useState<ToDoData>(toDoForm);
  const [error, setError] = useState(false);
  const [saveData, setSaveData] = useState<ToDoData[]>([]);
  const [duplicateError, setDuplicateError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const checkDuplicate = (duplicateData: ToDoData) => {
    return saveData.some(
      (item) =>
        item.email === duplicateData.email || item.phone === duplicateData.phone
    );
  };

  const showPasswordHandler = (e: any) => {
    e.preventDefault();
    setShowPassword((showPassword) => !showPassword);
  };

  const saveButtonHandler = (e: any) => {
    e.preventDefault();
    setError(true);

    if (checkDuplicate(value)) {
      setDuplicateError(true);
      return;
    }

    setDuplicateError(false);

    if (
      value.name !== "" &&
      value.email !== "" &&
      value.password !== "" &&
      value.confirmPassword !== "" &&
      value.phone !== "" &&
      value.password.length >= 6 &&
      emailRegex.test(value.email) &&
      value.phone.length >= 10 &&
      value.confirmPassword.match(value.password)
    ) {
      setSaveData([...saveData, value]);
      setValue(toDoForm);
      setError(false);
    }
  };

  const removeDataHandler = (index: number) => {
    setSaveData((removeData) => removeData.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-8">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-center text-3xl font-semibold text-gray-800 pb-8">
          TODO FORM
        </h2>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Name
            </label>
            <PrimaryInput
              myOnChange={(e) => setValue({ ...value, name: e.target.value })}
              myValue={value.name}
              myType="text"
              myPlaceholder="Enter your name"
              myClass="w-full p-3 border border-gray-300 rounded-lg  "
            />
            {error && !value.name && (
              <p className="text-red-500 text-sm">Please enter your name</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <PrimaryInput
              myOnChange={(e) => setValue({ ...value, email: e.target.value })}
              myValue={value.email}
              myType="email"
              myPlaceholder="Enter your email"
              myClass="w-full p-3 border border-gray-300 rounded-lg"
            />
            {error && !value.email && (
              <p className="text-red-500 text-sm">Please enter your email</p>
            )}
            {error && value.email && !emailRegex.test(value.email) && (
              <p className="text-red-500 text-sm">Invalid email format</p>
            )}
            {duplicateError && (
              <p className="text-red-500 text-sm">This email already exists</p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-lg font-medium text-gray-700"
            >
              Phone Number
            </label>
            <PrimaryInput
              myOnChange={(e) => setValue({ ...value, phone: e.target.value })}
              myValue={value.phone}
              myType="number"
              myPlaceholder="Enter your phone number"
              myClass="w-full p-3 border border-gray-300 rounded-lg  "
            />
            {error && !value.phone && (
              <p className="text-red-500 text-sm">
                Please enter your phone number
              </p>
            )}
            {error && value.phone && value.phone.length < 10 && (
              <p className="text-red-500 text-sm">
                Phone number must be at least 10 digits
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <div className="flex items-center space-x-2 border border-gray-300 rounded-lg">
              <PrimaryInput
                myOnChange={(e) =>
                  setValue({ ...value, password: e.target.value })
                }
                myValue={value.password}
                myType={showPassword ? "text" : "password"}
                myPlaceholder="Enter your password"
                myClass="w-full p-3 border-0"
              />
              <button
                type="button"
                className="text-blue-500 hover:text-blue-700 pr-2"
                onClick={showPasswordHandler}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {error && !value.password && (
              <p className="text-red-500 text-sm">Please enter your password</p>
            )}
            {error && value.password && value.password.length < 6 && (
              <p className="text-red-500 text-sm">
                Password must be at least 6 characters
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-lg font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <PrimaryInput
              myOnChange={(e) =>
                setValue({ ...value, confirmPassword: e.target.value })
              }
              myValue={value.confirmPassword}
              myType="password"
              myPlaceholder="Confirm your password"
              myClass="w-full p-3 border border-gray-300 rounded-lg  "
            />
            {error && !value.confirmPassword && (
              <p className="text-red-500 text-sm">
                Please confirm your password
              </p>
            )}
            {error &&
              value.confirmPassword &&
              value.password !== value.confirmPassword && (
                <p className="text-red-500 text-sm">Passwords do not match</p>
              )}
          </div>

          <button
            type="button"
            onClick={saveButtonHandler}
            className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all ease-linear duration-300"
          >
            Add Data
          </button>
        </form>
      </div>
      <div className="w-full max-w-[576px]">
        <div className="mt-8">
          <div className="overflow-x-auto rounded-lg shadow-md bg-white">
            <div className="flex justify-between p-4 bg-gray-100 border-b">
              <p className="font-medium text-base text-gray-700">Name</p>
              <p className="font-medium text-base text-gray-700">Email</p>
              <p className="font-medium text-base text-gray-700">Phone</p>
              <p className="font-medium text-base text-gray-700">Delete</p>
            </div>
            {saveData.map((obj, i) => (
              <div key={i} className="flex justify-between p-4 border-t">
                <p className="text-sm font-bold italic leading-6 font-montserrat">
                  {obj.name}
                </p>
                <p className="text-sm font-bold italic leading-6 font-montserrat">
                  {obj.email}
                </p>
                <p className="text-sm font-bold italic leading-6 font-montserrat">
                  {obj.phone}
                </p>
                <button
                  onClick={() => removeDataHandler(i)}
                  className="text-red-500 hover:text-red-700 transition-all ease-linear duration-300"
                >
                  <DeleteIcon />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
