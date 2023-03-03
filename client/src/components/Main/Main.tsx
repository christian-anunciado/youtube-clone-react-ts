import React from "react";
import Navbar from "../Navbar/Navbar";

type Props = {};

function Main({}: Props) {
  return (
    <div className="flex-[3] text-text dark:text-darkText">
      <Navbar />
      Main
    </div>
  );
}

export default Main;
