import React from "react";
import { useSelector } from "react-redux";
import Main from "../components/Main/Main";
import Menu from "../components/Menu/Menu";

type Props = {};

function Home({}: Props) {
  const theme = useSelector((state: any) => state.theme);
  return (
    <div className={`${theme?.darkMode && "dark"}`}>
      <div className="flex bg-bgLight dark:bg-darkBgLight">
        <Menu />
        <Main />
      </div>
    </div>
  );
}

export default Home;
