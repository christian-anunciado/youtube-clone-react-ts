import React, { useState } from "react";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
type Props = {};

function LikeDislike({}: Props) {
  const [state, setState] = useState("default");

  const handleLike = () => {
    if (state === "default") {
      setState("like");
    }
    if (state === "like") {
      setState("default");
    }

    if (state === "dislike") {
      setState("like");
    }
  };

  const handleDislike = () => {
    if (state === "default") {
      setState("dislike");
    }
    if (state === "dislike") {
      setState("default");
    }
    if (state === "like") {
      setState("dislike");
    }
  };
  return (
    <div className="flex min-h-[42px] cursor-pointer items-center rounded-full bg-soft text-sm font-medium dark:bg-darkSoft">
      <button
        className="flex h-full items-center gap-2 rounded-l-full pl-3 pr-4 hover:bg-divider dark:hover:bg-[#575757]"
        onClick={handleLike}
      >
        {state === "like" && <AiFillLike size={"1.5em"} />}
        {state === "default" && <AiOutlineLike size={"1.5em"} />}
        {state === "dislike" && <AiOutlineLike size={"1.5em"} />}
        Like
      </button>

      {/* Divider */}
      <div className="h-[60%] w-[1px] bg-[#DFDFDF] dark:bg-[#575757]" />
      <button
        className="h-full rounded-r-full pl-3 pr-4 hover:bg-divider dark:hover:bg-[#575757] "
        onClick={handleDislike}
      >
        <div className="-scale-x-100 ">
          {state === "like" && <AiOutlineDislike size={"1.5em"} />}
          {state === "default" && <AiOutlineDislike size={"1.5em"} />}
          {state === "dislike" && <AiFillDislike size={"1.5em"} />}
        </div>
      </button>
    </div>
  );
}

export default LikeDislike;
