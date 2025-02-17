"use client";

import React, { useState } from "react";

interface FormData {
  firstName: string;
  email: string;
  phone: string;
  password: string;
}

const ToDoList = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [tableData, setTableData] = useState<FormData[]>([]);
  const [errors, setErrors] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors(null);
  };

  const validateForm = (): string | null => {
    const { firstName, email, phone, password } = formData;

    if (!firstName || !email || !phone || !password) {
      return "All fields are required.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Invalid email format.";
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return "Phone number must be 10 digits.";
    }

    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setErrors(validationError);
      return;
    }

    const isDuplicateEmail = tableData.some(
      (data) => data.email === formData.email
    );
    if (isDuplicateEmail) {
      setErrors("Email already exists.");
      return;
    }

    const newEntry = {
      firstName: formData.firstName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };
    setTableData([...tableData, newEntry]);
    setFormData({
      firstName: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  const handleDelete = (email: string) => {
    const filteredData = tableData.filter((data) => data.email !== email);
    setTableData(filteredData);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Validation Form with Table</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-medium">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            className="mr-2"
          />
          <label htmlFor="showPassword" className="font-medium">
            Show Password
          </label>
        </div>

        {errors && <div className="text-red-500">{errors}</div>}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <h2 className="text-xl font-bold mt-6">Submitted Data</h2>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">First Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Phone</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr key={data.email}>
              <td className="border border-gray-300 p-2">{data.firstName}</td>
              <td className="border border-gray-300 p-2">{data.email}</td>
              <td className="border border-gray-300 p-2">{data.phone}</td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => handleDelete(data.email)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
