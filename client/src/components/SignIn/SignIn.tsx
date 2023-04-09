import React, { useContext } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { MenuContext } from "../../context/menuContext";

type Props = {};

function SignIn({}: Props) {
  const navigate = useNavigate();
  const menuContext = useContext(MenuContext);
  const selectedMenu = menuContext.selectedMenu;
  const setSelectedMenu = menuContext.setSelectedMenu;

  const handleClick = () => {
    navigate("/login");
    setSelectedMenu(-1);
  };
  return (
    <button
      className={`flex h-fit w-max items-center justify-center gap-1 rounded-xl border border-blueBorder py-1 px-4 text-sm font-medium uppercase text-blueBorder  ${
        selectedMenu === -1
          ? "bg-blue-500 text-white"
          : "hover:bg-blueSoft dark:hover:bg-darkBlueSoft"
      }`}
      onClick={handleClick}
    >
      <IoPersonCircleOutline size={"1.3em"} />
      Sign In
    </button>
  );
}

export default SignIn;
