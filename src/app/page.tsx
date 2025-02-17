import Hero from "@/components/dashboard/Hero";
import ToDoList from "@/components/dashboard/ToDoList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <ToDoList/>
    </>
  );
}
