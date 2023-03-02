import React from "react";
type Props = {
  iconDefault: JSX.Element;
  iconActive: JSX.Element;
  isActive: boolean;
  iconName: string;
  onClick?: () => void;
};

function MenuItem(props: Props) {
  return (
    <div
      className={`mr-3 flex min-w-0 cursor-pointer items-center gap-5 rounded-lg py-2 px-3 text-sm hover:bg-soft dark:hover:bg-darkSoft dark:hover:text-darkText ${
        props.isActive && "bg-soft dark:bg-darkSoft"
      }`}
      onClick={() => props.onClick?.()}
    >
      {props.isActive ? <>{props.iconActive}</> : <>{props.iconDefault}</>}
      {props.iconName}
    </div>
  );
}

export default MenuItem;
