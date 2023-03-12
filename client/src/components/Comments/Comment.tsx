import React, { useState } from "react";
import Avatar from "../Avatar/Avatar";
import SampleAvatar from "../../assets/2.webp";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import NumberFormatter from "../../helpers/NumberFormatter";

type Props = {};

type CommentTextProps = {
  commentText: string;
};

type ButtonsProps = {
  likeCount: number;
};

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed Lorem
ipsum dolor sit amet, consectetur adipiscing elit. SedLorem ipsum
dolor sit amet, consectetur adipiscing elit. SedLorem ipsum dolor sit
amet, consectetur adipiscing elit. Sed Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed Lorem
ipsum dolor sit amet, consectetur adipiscing elit. SedLorem ipsum
dolor sit amet, consectetur adipiscing elit. SedLorem ipsum dolor sit
amet, consectetur adipiscing elit. Sed Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed Lorem
ipsum dolor sit amet, consectetur adipiscing elit. SedLorem ipsum
dolor sit amet, consectetur adipiscing elit. SedLorem ipsum dolor sit
amet, consectetur adipiscing elit. Sed`;

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex grow flex-col gap-1 px-1">{children}</div>
);

const CommentWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2">{children}</div>
);

const CommentText = ({ commentText }: CommentTextProps) => {
  const [showMore, setShowMore] = useState(false);
  const isMaxTextCount: boolean = commentText.length > 550;
  const truncate = (str: string, n: number | 550) => {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  };
  return (
    <div className="font text-sm">
      {isMaxTextCount ? (
        <>
          {showMore ? commentText : truncate(commentText, 550)}
          <button
            className="mt-1 block font-medium dark:text-darkTextSoft"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </>
      ) : (
        <>{commentText}</>
      )}
    </div>
  );
};

const Buttons = (props: ButtonsProps) => {
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
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        <button
          className="ml-[-8px] flex h-[32px] w-[32px] transform items-center justify-center rounded-full hover:bg-divider dark:hover:bg-[#575757]"
          onClick={handleLike}
        >
          {state === "like" && <AiFillLike size={"1.3em"} />}
          {state === "default" && <AiOutlineLike size={"1.3em"} />}
          {state === "dislike" && <AiOutlineLike size={"1.3em"} />}
        </button>
        <div className="text-xs font-light dark:text-darkTextSoft">
          {NumberFormatter(props.likeCount)}
        </div>
      </div>
      <button
        className="flex h-[32px] w-[32px] -scale-x-100 items-center justify-center rounded-full hover:bg-divider dark:hover:bg-[#575757]"
        onClick={handleDislike}
      >
        {state === "like" && <AiOutlineDislike size={"1.3em"} />}
        {state === "default" && <AiOutlineDislike size={"1.3em"} />}
        {state === "dislike" && <AiFillDislike size={"1.3em"} />}
      </button>

      <button className="flex h-[32px] items-center justify-center rounded-full px-3 text-xs font-medium hover:bg-divider dark:hover:bg-[#575757]">
        Reply
      </button>
    </div>
  );
};

function Comment({}: Props) {
  return (
    <div className="flex gap-3">
      <div className="shrink-0">
        <Avatar src={SampleAvatar} height={"40"} width={"40"} />
      </div>
      <Wrapper>
        <CommentWrapper>
          <div className="text-[13px] font-medium">John Doe</div>
          <div className="text-xs font-light dark:text-darkTextSoft">
            2 hours ago
          </div>
        </CommentWrapper>
        <CommentText commentText={text} />
        <Buttons likeCount={200} />
      </Wrapper>
    </div>
  );
}

export default Comment;
