import React from "react";
import { Link } from "react-router-dom";
import Youtube from "../../assets/icons8-youtube.svg";
type Props = {};

function Logo({}: Props) {
  return (
    <Link to={"/"}>
      <div className="mb-4 flex items-center gap-0.5">
        <img className="ml-2 h-9 w-9" src={Youtube} alt="" />
        <div className="text-base font-medium">NinjaTube</div>
      </div>
    </Link>
  );
}

export default Logo;
