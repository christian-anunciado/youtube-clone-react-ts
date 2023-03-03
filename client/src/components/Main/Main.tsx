import React from "react";
import Cards from "../Cards/Cards";
import Navbar from "../Navbar/Navbar";

type Props = {};

function Main({}: Props) {
  return (
    <div className="flex-[3] text-text dark:text-darkText">
      <Navbar />
      <Cards />
    </div>
  );
}

export default Main;
