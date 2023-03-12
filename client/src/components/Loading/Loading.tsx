import React from "react";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

type Props = {};

function Loading({}: Props) {
  const theme = useSelector((state: any) => state.theme);

  return (
    <div className={`${theme?.darkMode && "dark"}`}>
      <div className="dark:bg-bgDark flex h-screen w-screen items-center justify-center bg-bgLight">
        <ClipLoader />
      </div>
    </div>
  );
}

export default Loading;
