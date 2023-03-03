import React from "react";
import Logo from "../Logo/Logo";
import MenuItems from "./MenuItems";

type Props = {};

function Menu({}: Props) {
  return (
    <div className="sticky top-0 flex h-screen w-52 flex-col bg-white py-3 px-3 text-text dark:bg-darkBgLighter dark:text-darkText">
      <Logo />
      <MenuItems />
    </div>
  );
}

export default Menu;
