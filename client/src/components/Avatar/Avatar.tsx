import React from "react";

type Props = {
  src?: string;
  height?: string;
  width?: string;
};

function Avatar(props: Props) {
  return (
    <img
      src={props.src || ""}
      alt=""
      width={`${props.width}px`}
      height={`${props.height}px`}
      className={`rounded-full object-cover`}
    />
  );
}

export default Avatar;
