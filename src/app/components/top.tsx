"use client";
import { useState } from "react";

export default function Top() {
  const [selected, setSelected] = useState("Product");
  const [isOpen, setIsOpen] = useState(false);

  const option1 = ["Product", "Vendor"];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-transparent to-gray-800 items-center justify-center">
      <div className="">
        <h1 className="text-4xl text-sky-50 text-center">
          Find <span className="font-bold">Great Products</span> <br /> &
          <span className="font-bold">Credible Vendors</span>
          <br />
          <span className="font-light italic">... all in seconds</span>
        </h1>
      </div>
      <div className="">
        <div className="w-screen flex pt-4">
          <input
            className="bg-sky-50 w-full text-gray-600 p-2 mt-5 rounded-l-sm"
            type="text"
            placeholder="Search Products"
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 mt-5 text-gray-600 bg-sky-50 rounded-r-sm"
          >
            {selected}
          </button>
          
        </div>
        <div className="w-screen flex flex-col">
          <input
            className="bg-sky-50 text-gray-600 w-full p-2 mt-5 rounded-sm"
            type="text"
            placeholder="Location"
          />
        </div>
      </div>
    </div>
  );
}
