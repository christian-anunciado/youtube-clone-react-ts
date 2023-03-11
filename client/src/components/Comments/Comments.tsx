import React, { useState } from "react";
import { MdSort } from "react-icons/md";
import SampleAvatar from "../../assets/2.webp";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { BsEmojiLaughing } from "react-icons/bs";
import Avatar from "../Avatar/Avatar";

type Props = {};

type HeaderProps = {
  numberOfComments?: number;
};

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-2 flex flex-col gap-2">{children}</div>
);

const Header = (props: HeaderProps) => {
  return (
    <div className="flex items-center gap-8">
      {props.numberOfComments || ""} Comments
      <div className="flex items-center gap-1 text-sm font-medium">
        <MdSort size={"1.2em"} />
        Sort By
      </div>
    </div>
  );
};

const InputComment = () => {
  const [comment, setComment] = useState("");
  const [focused, setFocused] = useState(false);
  return (
    <div className="mt-2 flex gap-2">
      <div>
        <Avatar src={SampleAvatar} height={"40"} width={"40"} />
      </div>
      <div className="flex grow flex-col gap-2 px-1">
        <input
          type={"text"}
          className="border-bottom-1 w-full border-0 border-b border-b-darkDivider bg-transparent text-sm font-medium focus:border-b-2 focus:border-b-darkDivider focus:outline-none focus:ring-0 dark:border-b-divider dark:focus:border-b-divider"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onClick={() => setFocused(true)}
        />
        {/* <Picker data={data} onEmojiSelect={console.log} /> */}
        {focused && (
          <div className={`flex justify-between`}>
            <div className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full hover:bg-soft dark:bg-darkSoft dark:hover:bg-darkTextSoft">
              <BsEmojiLaughing size={"1.2em"} />
            </div>
            <div className="flex gap-6">
              <button className="font-medium" onClick={() => setFocused(false)}>
                Cancel
              </button>
              <button
                disabled={comment.length === 0}
                className={`h-[36px] rounded-full px-5 font-medium ${
                  comment.length === 0
                    ? "bg-soft dark:bg-darkSoft"
                    : "bg-blueBorder dark:bg-blueBorder"
                }  ${
                  comment.length === 0
                    ? "text-textSoft dark:text-darkTextSoft"
                    : "text-darkText dark:text-darkText"
                }`}
              >
                Comment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Comments({}: Props) {
  return (
    <div>
      <Wrapper>
        <Header numberOfComments={250} />
        <InputComment />
      </Wrapper>
    </div>
  );
}
