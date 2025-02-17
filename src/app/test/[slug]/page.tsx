"use client";
import Hero from "@/components/Hero";
import ToDoList from "@/components/ToDoList";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const HeroLayout = () => {
  const arr = ["Question-one", "Question-two"];
  const [open, setOpen] = useState(0);
  const param = useParams();
  const { slug } = param;
  const handleButtonClick = (index: any) => {
    setOpen(open === index ? false : index);
  };
  return (
    <div>
      <div className="flex gap-4 bg-[#D9D9D9] justify-center items-center">
        {arr.map((obj, i) => (
          <Link
            href={`/test/${obj.toLowerCase().replace(" ", "-")}`}
            onClick={() => handleButtonClick(i)}
            key={i}
            className={`${
              slug === obj.toLowerCase().replace(" ", "-") &&
              "bg-blue-700 text-black border border-black"
            } bg-black mx-auto text-white px-4 py-2.5 my-2 border border-transparent text-base font-normal rounded-lg hover:text-black hover:bg-transparent hover:border-black duration-300 ease-linear text-center flex justify-center items-center`}
          >
            {obj}
          </Link>
        ))}
      </div>
      {slug === "question-one" && <ToDoList />}
      {slug === "question-two" && <Hero />}
    </div>
  );
};

export default HeroLayout;
