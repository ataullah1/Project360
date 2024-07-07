"use client";
import axios from "axios";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Searchbar = ({ cls, setShow }) => {
  const [input, setInput] = useState("");
  const [datas, setdatas] = useState("");

  const handleSearchbar = () => {
    setShow("hidden");
    // Add logic here for search functionality or closing the search bar
  };

  const fetchData = (value) => {
    axios.get(`/themes.json`).then((res) => {
      const results = res.data.filter((data) => {
        return (
          value && data && data.slug && data.slug.toLowerCase().includes(value)
        );
      });
      setdatas(results);
    });
  };
  console.log(datas);

  const handleChange = (value) => {
    console.log(value);
    setInput(value);
    fetchData(value);
    // You can add additional logic related to handling the input here
  };

  return (
    <div className={cls}>
      <div className="w-full h-20 bg-white fixed top-0 left-0 right-0 z-50 flex justify-center items-center">
        <input
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          className="w-1/3 h-full outline-none"
          placeholder="Search by feature, style, or designer"
        />
        <button onClick={handleSearchbar}>
          <IoMdClose className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
