import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Youtube from "../../assets/icons8-youtube.svg";
import { MenuContext } from "../../context/menuContext";
type Props = {};

function Logo({}: Props) {
  const menuContext = useContext(MenuContext);
  const setSelectedMenu = menuContext.setSelectedMenu;
  return (
    <Link to={"/"} onClick={() => setSelectedMenu(0)}>
      <div className="mb-4 flex items-center gap-0.5">
        <img className="ml-2 h-9 w-9" src={Youtube} alt="" />
        <div className="text-base font-medium">NinjaTube</div>
      </div>
    </Link>
  );
}

export default Logo;
