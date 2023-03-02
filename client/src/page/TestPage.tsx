import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/themeRedux";

type Props = {};

function TestPage({}: Props) {
  const theme = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className={`${theme?.darkMode && "dark"}`}>
      <div
        className={`flex h-screen w-screen flex-col items-center justify-center gap-2 bg-bgLight text-text dark:bg-darkBgLight dark:text-darkText`}
      >
        <h1 className="text-xl font-bold">Dark Mode Test</h1>
        <h2>
          Current mode:{" "}
          <span>{`${theme?.darkMode ? "Dark Mode" : "Light Mode"}`}</span>
        </h2>
        <button
          className="rounded-md bg-darkBgLight p-2 text-white dark:bg-bgLight dark:text-text"
          onClick={() => dispatch(toggleDarkMode())}
        >
          {" "}
          Toggle Mode{" "}
        </button>
      </div>
    </div>
  );
}

export default TestPage;
