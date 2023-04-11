import React from "react";
import AvatarSample from "../../assets/2.webp";

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
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = AvatarSample;
      }}
    />
  );
}

export default Avatar;
