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
      className={`flex min-w-full cursor-pointer items-center gap-5 rounded-lg py-1.5 px-3 text-sm hover:bg-soft dark:hover:bg-darkTextSoft dark:hover:text-darkText`}
      onClick={() => props.onClick?.()}
    >
      {props.isActive ? <>{props.iconActive}</> : <>{props.iconDefault}</>}
      {props.iconName}
    </div>
  );
}

export default MenuItem;
