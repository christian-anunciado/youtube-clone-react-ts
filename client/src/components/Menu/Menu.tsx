import React from "react";
import Logo from "../Logo/Logo";
import MenuItems from "./MenuItems";

type Props = {};

function Menu({}: Props) {
  return (
    <div className="h-screen w-52 overflow-auto bg-white py-4 px-2 text-text dark:bg-darkBgLighter dark:text-darkText">
      <Logo />
      <MenuItems />
    </div>
  );
}

export default Menu;
