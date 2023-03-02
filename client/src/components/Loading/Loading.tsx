import React from "react";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

type Props = {};

function Loading({}: Props) {
  const theme = useSelector((state: any) => state.theme);
  console.log("Loading", theme.darkMode);

  return (
    <div className={`${theme?.darkMode && "dark"}`}>
      <div className="flex h-screen w-screen items-center justify-center bg-bgLight dark:bg-bgDark">
        <ClipLoader />
      </div>
    </div>
  );
}

export default Loading;
