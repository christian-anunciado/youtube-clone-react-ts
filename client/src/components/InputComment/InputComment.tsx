import SampleAvatar from "../../assets/2.webp";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data/sets/14/google.json";
import { BsEmojiLaughing } from "react-icons/bs";
import Avatar from "../Avatar/Avatar";
import { useClickOutside } from "../../hooks/useClickOutside";
import React, { useState, useEffect } from "react";

type Props = {};

const InputComment = () => {
  const [comment, setComment] = useState("");
  const [focused, setFocused] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const emojiRef = React.useRef(null);
  useClickOutside(emojiRef, () => setShowEmoji(false));

  return (
    <div className="mt-2 mb-6 flex gap-2 ">
      <div>
        <Avatar src={SampleAvatar} height={"40"} width={"40"} />
      </div>
      <div className="flex grow flex-col gap-2 px-1">
        <input
          type={"text"}
          className="border-bottom-1 w-full border-0 border-b border-b-darkDivider bg-transparent text-sm focus:border-b-2 focus:border-b-darkDivider  focus:outline-none focus:ring-0 dark:border-b-divider dark:focus:border-b-divider"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onClick={() => setFocused(true)}
        />

        {focused && (
          <div className={`relative flex justify-between`}>
            <div
              className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full hover:bg-soft dark:bg-darkSoft dark:hover:bg-darkTextSoft"
              onClick={() => setShowEmoji(true)}
            >
              <BsEmojiLaughing size={"1.2em"} />
            </div>
            {showEmoji && (
              <div className="absolute top-0 left-0" ref={emojiRef}>
                <Picker
                  data={data}
                  onEmojiSelect={(e) => setComment(comment + e.native)}
                  previewPosition={"none"}
                  set={"google"}
                />
              </div>
            )}
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

export default InputComment;
