import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleDarkMode } from "./redux/themeRedux";

function App() {
  const theme = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className={`${theme?.darkMode && "dark"}`}>
      <div
        className={`} flex h-screen w-screen flex-col items-center justify-center gap-2 bg-bgLight text-bgDark dark:bg-bgDark dark:text-bgLight`}
      >
        <h1 className="text-xl font-bold">Dark Mode Test</h1>
        <h2>
          Current mode:{" "}
          <span>{`${theme?.darkMode ? "Dark Mode" : "Light Mode"}`}</span>
        </h2>
        <button
          className="rounded-md bg-bgDark p-2 text-bgLight dark:bg-bgLight dark:text-bgDark"
          onClick={() => dispatch(toggleDarkMode())}
        >
          {" "}
          Toggle Mode{" "}
        </button>
      </div>
    </div>
  );
}

export default App;
